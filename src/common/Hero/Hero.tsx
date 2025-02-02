import { useState, useEffect } from 'react';

interface BackgroundImage {
  src: string;
  alt: string;
  position: string;
  directionX: number;
  directionY: number;
}

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImages: BackgroundImage[];
  gradientColors: string;
  accentColors: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImages,
  gradientColors,
  accentColors,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const smoothMovement = () => {
      setSmoothPosition(prev => {
        const easeFactor = 0.25;
        const newX = prev.x + (mousePosition.x - prev.x) * easeFactor;
        const newY = prev.y + (mousePosition.y - prev.y) * easeFactor;
        return { x: newX, y: newY };
      });

      requestAnimationFrame(smoothMovement);
    };

    requestAnimationFrame(smoothMovement);
  }, [mousePosition]);

  const moveAmountX = smoothPosition.x / 50;
  const moveAmountY = smoothPosition.y / 50;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div
        className={`absolute w-full min-h-screen bg-gradient-to-r ${gradientColors} skew-y-[-7deg] -top-60`}
      ></div>

      {/* Background Pattern */}
      <div className="absolute inset-0">
        {backgroundImages.map((bg, index) => (
          <img
            key={index}
            src={bg.src}
            alt={bg.alt}
            className={`absolute ${bg.position} w-full h-auto`}
            style={{
              transform: `translate(${moveAmountX * bg.directionX}px, ${
                moveAmountY * bg.directionY
              }px)`,
            }}
          />
        ))}
      </div>

      {/* Bottom Slant with Accent */}
      <div
        className={`absolute bottom-32 left-0 w-full h-[110px] bg-gradient-to-r ${accentColors} skew-y-[-6deg] origin-bottom-left`}
        style={{ clipPath: 'polygon(0% 80%, 100% 40%, 100% 100%, 0% 100%)' }}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center pl-48 text-white mb-32">
        <p className="text-teal-300 uppercase tracking-wide text-sm">{title}</p>
        <h2 className="text-[82px] font-semibold leading-tight max-w-4xl  ">
          {subtitle}
        </h2>
        <p className="mt-4 text-lg max-w-xl opacity-80 font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default Hero;
