import { useState, useEffect } from 'react';
import bg1 from '../../../../assets/backgrounds/WaveLinesDesktop1.svg';
import bg2 from '../../../../assets/backgrounds/WaveLinesDesktop2.svg';
import bg3 from '../../../../assets/backgrounds/WaveLinesDesktop3.svg';
import bg4 from '../../../../assets/backgrounds/WaveLinesDesktop4.svg';
import avatar from '../../../../assets/backgrounds/b1.png';


const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove =( event:any ) => {
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
      {/* <div className="absolute right-0 bottom">
        <img
          src={avatar}
          alt="Business Woman"
          className="  w-full mt-10 -rotate-6 "
          
        />
      </div> */}
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
      <div className="absolute inset-0 flex flex-col justify-center pl-[11rem] text-white mb-52">
        <h2 className="text-7xl font-medium  leading-tight">
          Embrace the <br /> future of finance
        </h2>
        <p className="mt-4 text-lg max-w-xl">
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation
        </p>
        <button className=" mt-3 bg-orange-400 text-white px-6 py-3 rounded-sm shadow-lg  font-semibold uppercase hover:bg-orange-500 transition-all duration-300 w-fit">
  Reach out to us
</button>

      </div>

      {/* Avatar Image */}
    </div>
  );
};

export default Hero;
