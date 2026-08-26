import React from 'react';

const Blobs = ({ color = 'rgba(157, 194, 55, 0.2)' }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {/* Top Right Blob */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(120px)',
        opacity: 0.8 // since the color itself has 0.2 opacity, or we can use solid color and opacity here.
      }} />
      {/* Bottom Left Blob */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(120px)',
        opacity: 0.6
      }} />
    </div>
  );
};

export default Blobs;
