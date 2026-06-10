"use client";
import { useState, useEffect, useRef } from 'react';

export default function CountUp({ end, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries && entries[0] && entries[0].isIntersecting) {
        setHasStarted(true);
      }
    }, { threshold: 0.5 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let frameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      const currentVal = Math.floor(progressPercentage * end);
      setCount(currentVal);

      if (progressPercentage < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };
    
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, hasStarted]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
}
