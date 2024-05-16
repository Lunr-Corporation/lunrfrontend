
import React, { useEffect } from 'react';

const ProgressBar = () => {
  useEffect(() => {
    function handleScroll() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      const progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div id="progress-bar" style={{ position: 'fixed', top: 0, left: 0, width: '0%', height: '4px', background: '#007BFF', zIndex: 100 }}></div>;
};

export default ProgressBar;