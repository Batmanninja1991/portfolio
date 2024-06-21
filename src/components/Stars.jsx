import React, { useEffect } from 'react';
import '../components/stars.css';

const Stars = () => {
  useEffect(() => {
    const starsContainer = document.querySelector('.stars');
    const starCount = 5;

    const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      const starTailLength = randomRange(50, 75) / 10 + 'em';
      const topOffset = randomRange(0, 10000) / 100 + 'vh';
      const fallDuration = randomRange(6000, 12000) / 1000 + 's';
      const fallDelay = randomRange(0, 10000) / 1000 + 's';

      star.style.setProperty('--star-tail-length', starTailLength);
      star.style.setProperty('--top-offset', topOffset);
      star.style.setProperty('--fall-duration', fallDuration);
      star.style.setProperty('--fall-delay', fallDelay);

      starsContainer.appendChild(star);
      
    }
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#0d1d31] to-[#0c0d13] overflow-hidden">
      <div className="stars fixed top-0 left-0 w-full h-[120%] transform -rotate-45"></div>
    </div>
  );
};

export default Stars;
