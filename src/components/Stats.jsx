"use client";
import CountUp from './CountUp';

export default function Stats() {
  return (
    <section className="stats-section-bordered">
      <div className="stats-container-grid">
        <div className="stat-card-bordered">
          <h3><CountUp end={10} suffix="" /></h3>
          <p>Completed Works</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={3} suffix="+" /></h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={100} suffix="%" /></h3>
          <p>Client Satisfaction</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={4} suffix="" /></h3>
          <p>Core Developers</p>
        </div>
      </div>
    </section>
  );
}
