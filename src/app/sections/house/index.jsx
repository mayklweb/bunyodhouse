import React, { useEffect, useRef } from 'react';

function House() {
  const embedRef = useRef(null);

  useEffect(() => {
    // Load Instagram embed.js script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={embedRef}>
      <iframe src="https://www.instagram.com/reel/DG-5GR_sjXG/"></iframe>
    </div>
  );
}

export default House;
