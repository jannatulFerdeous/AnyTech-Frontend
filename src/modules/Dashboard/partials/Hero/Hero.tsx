import { useState, useEffect } from 'react';
import bg1 from '../../../../assets/backgrounds/WaveLinesDesktop1.svg';
import bg2 from '../../../../assets/backgrounds/WaveLinesDesktop2.svg';
import bg3 from '../../../../assets/backgrounds/WaveLinesDesktop3.svg';
import bg4 from '../../../../assets/backgrounds/WaveLinesDesktop4.svg';
import avatar from '../../../../assets/backgrounds/bg2.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = event => {
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

  const moveAmountX = smoothPosition.x / 90;
  const moveAmountY = smoothPosition.y / 90;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute w-full min-h-screen bg-gradient-to-r from-[#0099ff] to-[#0044cc] skew-y-[-6deg] -top-52"></div>
      <div className="absolute right-0 bottom">
        <img
          src={avatar}
          alt="Business Woman"
          className="  w-[800px] mb-44"
          style={{ clipPath: 'polygon(0% 20%, 100% 10%, 100% 60%, 0% 100%)' }}
        />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img
          src={bg1}
          alt="Background 1"
          className="absolute -top-60 left-0 w-full h-auto"
          style={{
            transform: `translate(${moveAmountX}px, ${moveAmountY}px)`,
          }}
        />
        <img
          src={bg2}
          alt="Background 2"
          className="absolute bottom-32 right-0 w-full h-auto"
          style={{
            transform: `translate(${-moveAmountX}px, ${-moveAmountY}px)`,
          }}
        />
        <img
          src={bg3}
          alt="Background 3"
          className="absolute -top-60 left-0 w-full h-auto "
          style={{
            transform: `translate(${moveAmountX}px, ${moveAmountY}px)`,
          }}
        />

        <img
          src={bg4}
          alt="Background 4"
          className="absolute -top-60 right-0 w-full h-auto "
          style={{
            transform: `translate(${-moveAmountX}px, ${-moveAmountY}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center pl-[17rem] text-white mb-52">
        <h2 className="text-8xl font-medium max-w-4xl leading-tight">
          Embrace the <br /> future of finance
        </h2>
        <p className="mt-4 text-lg max-w-xl">
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation
        </p>
      </div>

      {/* Avatar Image */}
    </div>
  );
};

export default Hero;
