"use client";
import CountUp from './CountUp';

export default function Stats() {
  return (
    <section className="stats-section-bordered">
      <div className="stats-container-grid">
        <div className="stat-card-bordered">
          <h3><CountUp end={50} suffix="+" /></h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={3} suffix="+" /></h3>
          <p>Years of Innovation</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={99} suffix="%" /></h3>
          <p>Client Satisfaction</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={15} suffix="+" /></h3>
          <p>Expert Team</p>
        </div>
      </div>
    </section>
  );
}
