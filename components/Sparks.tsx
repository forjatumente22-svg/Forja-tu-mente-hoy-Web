import React, { useMemo, useState, useEffect } from 'react';

const Sparks: React.FC = React.memo(() => {
  const [sparkCount, setSparkCount] = useState(12); // Default to mobile count (safe first)

  useEffect(() => {
    // Update count based on device capability/width
    const updateCount = () => {
      setSparkCount(window.innerWidth < 768 ? 12 : 20);
    };
    
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const sparks = useMemo(() => {
    return Array.from({ length: sparkCount }).map((_, i) => {
      const left = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 3 + 2; // 2-5s
      const delay = Math.random() * 5;
      
      return (
        <div
          key={i}
          className="spark"
          style={{
            left: `${left}vw`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `-${delay}s`,
            opacity: Math.random() * 0.5 + 0.5
          }}
        />
      );
    });
  }, [sparkCount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {sparks}
    </div>
  );
});

export default Sparks;