"use client";
import CountUp from './CountUp';

export default function Stats() {
  return (
    <section className="stats-section-bordered">
      <div className="stats-container-grid">
        <div className="stat-card-bordered">
          <h3><CountUp end={400} suffix="+" /></h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={15} suffix="+" /></h3>
          <p>Success Years</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={98} suffix="%" /></h3>
          <p>Client Retention</p>
        </div>
        <div className="stat-card-bordered">
          <h3><CountUp end={30} suffix="+" /></h3>
          <p>Countries</p>
        </div>
      </div>
    </section>
  );
}
