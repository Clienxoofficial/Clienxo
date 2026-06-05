"use client";
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants/data';

export default function Testimonials() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIdx(prev => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(testimonialTimer);
  }, []);

  return (
    <section id="testimonials" className="testimonials-section fade-in-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-mini-title">TESTIMONIALS</span>
          <h2 className="section-title uppercase">Loved by Founders & Product Teams</h2>
          <div className="header-bar"></div>
        </div>

        <div className="testimonial-slider-container">
          <div className="testimonial-slide">
            <div className="testimonial-stars">
              {[...Array(TESTIMONIALS[testimonialIdx].stars)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="star-icon" />
              ))}
            </div>
            <p className="testimonial-quote">"{TESTIMONIALS[testimonialIdx].quote}"</p>

            <div className="testimonial-profile">
              <div className="profile-avatar">{TESTIMONIALS[testimonialIdx].avatar}</div>
              <div className="profile-details">
                <h4>{TESTIMONIALS[testimonialIdx].author}</h4>
                <p>{TESTIMONIALS[testimonialIdx].role}, {TESTIMONIALS[testimonialIdx].company}</p>
              </div>
            </div>
          </div>

          <div className="slider-navigation">
            <button onClick={() => setTestimonialIdx(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous Testimonial">
              <ChevronLeft size={20} />
            </button>
            <div className="slider-dots">
              {TESTIMONIALS.map((_, idx) => (
                <span
                  key={idx}
                  className={`slider-dot ${idx === testimonialIdx ? 'active' : ''}`}
                  onClick={() => setTestimonialIdx(idx)}
                ></span>
              ))}
            </div>
            <button onClick={() => setTestimonialIdx(prev => (prev + 1) % TESTIMONIALS.length)} aria-label="Next Testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
