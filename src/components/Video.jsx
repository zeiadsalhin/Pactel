import { useRef, useState, useEffect } from 'react';

// Lazy load video component
const LazyVideo = ({ src, poster, width, height, ...props }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className="md:flex justify-center md:space-x-2 space-y-2 p-2">
      {isInView && (
        <video
          src={src}
          poster={poster}
          width={width}
          height={height}
          playsInline
          autoPlay
          loop
          muted
          {...props}
        />
      )}
    </div>
  );
};

export default LazyVideo;