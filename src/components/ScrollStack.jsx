"use client";
import React, { useLayoutEffect, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full rounded-2xl shadow-lg box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      transition: 'box-shadow 0.3s ease'
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 40,
  itemScale = 0.04,
  itemStackDistance = 25,
  stackPosition = '15%',
  scaleEndPosition = '5%',
  baseScale = 0.92,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  scrollContainerSelector = '',
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollContainerSelector 
        ? document.querySelector(scrollContainerSelector) 
        : scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll, scrollContainerSelector]);

  const getAbsoluteOffsetTop = (element) => {
    let top = 0;
    let el = element;
    while (el) {
      top += el.offsetTop || 0;
      el = el.offsetParent;
    }
    return top;
  };

  const getElementOffset = useCallback(
    (element) => {
      const elementAbsoluteTop = getAbsoluteOffsetTop(element);
      if (useWindowScroll) {
        return elementAbsoluteTop;
      } else {
        const scroller = scrollContainerSelector 
          ? document.querySelector(scrollContainerSelector) 
          : scrollerRef.current;
        if (scroller) {
          const scrollerAbsoluteTop = getAbsoluteOffsetTop(scroller);
          return elementAbsoluteTop - scrollerAbsoluteTop;
        }
        return element.offsetTop;
      }
    },
    [useWindowScroll, scrollContainerSelector]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;
    
    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    
    const endElement = useWindowScroll 
      ? document.querySelector('.scroll-stack-end') 
      : (scrollContainerSelector 
          ? document.querySelector(scrollContainerSelector)?.querySelector('.scroll-stack-end')
          : scrollerRef.current?.querySelector('.scroll-stack-end'));
    const endElementTop = endElement ? getElementOffset(endElement) : 0;
    
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;
      
      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;
      
      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }
      
      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }
      
      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };
      
      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged = !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;
        
      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';
        card.style.transform = transform;
        card.style.filter = filter;
        lastTransformsRef.current.set(i, newTransform);
      }
      
      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
    
    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    scrollContainerSelector,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const isAnimating = useRef(false);
  const handleScroll = useCallback(() => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      requestAnimationFrame(() => {
        updateCardTransforms();
        isAnimating.current = false;
      });
    }
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const isTouchDevice = typeof window !== 'undefined' && 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) return null;

    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: false,
      });
      lenis.on('scroll', handleScroll);
      
      const raf = (time) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollContainerSelector 
        ? document.querySelector(scrollContainerSelector) 
        : scrollerRef.current;
      if (!scroller) return;
      const lenis = new Lenis({
        wrapper: scroller,
        content: scrollContainerSelector ? scroller : (scroller.querySelector('.scroll-stack-inner') || scroller),
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientation: 'vertical',
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: false,
      });
      lenis.on('scroll', handleScroll);
      
      const raf = (time) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll, scrollContainerSelector]);

  useIsomorphicLayoutEffect(() => {
    const scroller = scrollContainerSelector 
      ? document.querySelector(scrollContainerSelector) 
      : scrollerRef.current;
    if (!useWindowScroll && !scroller) return;
    
    const cards = Array.from(
      useWindowScroll 
        ? document.querySelectorAll('.scroll-stack-card') 
        : (scroller?.querySelectorAll('.scroll-stack-card') ?? [])
    );
    cardsRef.current = cards;
    
    const transformsCache = lastTransformsRef.current;
    
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });
    
    const isTouchDevice = typeof window !== 'undefined' && 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const scrollTarget = useWindowScroll ? window : (scroller || window);
    let activeLenis = null;

    if (isTouchDevice) {
      scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      activeLenis = setupLenis();
    }

    updateCardTransforms();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (activeLenis) {
        activeLenis.destroy();
      } else if (isTouchDevice) {
        scrollTarget.removeEventListener('scroll', handleScroll);
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    scrollContainerSelector,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
    handleScroll
  ]);

  return (
    <div
      className={`scroll-stack-scroller ${useWindowScroll ? 'window-scroll' : ''} ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" style={{ height: '1px', width: '100%' }} />
      </div>
    </div>
  );
};

export default ScrollStack;
