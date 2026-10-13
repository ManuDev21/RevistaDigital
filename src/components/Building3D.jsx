import React from 'react';

const Building3D = () => (
  <div className="building-container" role="img" aria-label="Edificio universitario en animación tridimensional">
    <div className="building">
      {/* Front Face */}
      <div className="building-face building-front">
        {/* Windows */}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="building-window" style={{ '--glow-duration': `${2 + (i % 4) * 0.35}s` }} />
        ))}
      </div>

      {/* Back Face */}
      <div className="building-face building-back">
        {[...Array(12)].map((_, i) => <div key={i} className="building-window" />)}
      </div>

      {/* Right Face */}
      <div className="building-face building-right">
        {[...Array(6)].map((_, i) => <div key={i} className="building-window building-window-side" />)}
      </div>

      {/* Left Face */}
      <div className="building-face building-left">
        {[...Array(6)].map((_, i) => <div key={i} className="building-window building-window-side" />)}
      </div>

      {/* Top Face */}
      <div className="building-face building-top" />

      {/* Bottom Face */}
      <div className="building-face building-bottom" />
    </div>
    <div className="building-plinth" />
  </div>
);

export default Building3D;
