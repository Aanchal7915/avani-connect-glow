import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ 
  target, 
  duration = 2000, 
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  const animateCount = () => {
    const steps = 60;
    const stepValue = target / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentCount = Math.min(stepValue * currentStep, target);
      setCount(currentCount);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  return (
    <div ref={ref} className={className}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </div>
  );
};

export default AnimatedCounter; 