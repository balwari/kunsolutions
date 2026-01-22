import { useState, useEffect } from "react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

interface SlidingBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const SlidingBackground = ({ children, className = "" }: SlidingBackgroundProps) => {
  const images = [heroBg1, heroBg2, heroBg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImageIndex, images.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Current image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: isTransitioning ? 0 : 1,
        }}
      />

      {/* Next image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[nextImageIndex]})`,
          opacity: isTransitioning ? 1 : 0,
        }}
      />

      {/* Optional gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50"></div>

      {/* Transparent green overlay */}
      <div className="absolute inset-0 bg-green-900/50"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? "bg-green-500 scale-125"
                : "bg-white/50 hover:bg-white/75"
              }`}
            onClick={() => {
              if (index !== currentImageIndex) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setNextImageIndex((index + 1) % images.length);
                  setIsTransitioning(false);
                }, 500);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingBackground;
