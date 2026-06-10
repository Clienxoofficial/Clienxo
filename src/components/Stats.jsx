"use client";
import CountUp from './CountUp';

export default function Stats() {
  return (
    <section className="stats-section-bordered">
      <div className="stats-container-grid">
        <div className="stat-card-bordered">
          <h3><CountUp end={25} suffix="+" /></h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={15} suffix="+" /></h3>
          <p>AI Solutions Built</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={10000} suffix="+" /></h3>
          <p>Hours Saved Through Automation</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={100} suffix="%" /></h3>
          <p>Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
