"use client";

export default function ClienxoLogo({ onClick }) {
  return (
    <div className="navbar-logo" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <img 
        src="/assests/2_cropped.png" 
        className="logo-img logo-dark" 
        alt="Clienxo Logo" 
      />
      <img 
        src="/assests/1_cropped.png" 
        className="logo-img logo-light" 
        alt="Clienxo Logo" 
      />
    </div>
  );
}
