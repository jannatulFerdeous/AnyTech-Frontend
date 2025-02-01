// import { useState, useEffect } from 'react';
// import bg1 from '../../../../assets/backgrounds/WaveLinesDesktop1.svg';
// import bg2 from '../../../../assets/backgrounds/WaveLinesDesktop2.svg';
// import bg3 from '../../../../assets/backgrounds/WaveLinesDesktop3.svg';
// import bg4 from '../../../../assets/backgrounds/WaveLinesDesktop4.svg';

// const Hero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = event => {
//       setMousePosition({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const smoothMovement = () => {
//       setSmoothPosition(prev => {
//         const easeFactor = 0.25;
//         const newX = prev.x + (mousePosition.x - prev.x) * easeFactor;
//         const newY = prev.y + (mousePosition.y - prev.y) * easeFactor;
//         return { x: newX, y: newY };
//       });

//       requestAnimationFrame(smoothMovement);
//     };

//     requestAnimationFrame(smoothMovement);
//   }, [mousePosition]);

//   const moveAmountX = smoothPosition.x / 50;
//   const moveAmountY = smoothPosition.y / 50;

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute w-full min-h-screen bg-gradient-to-r from-[#0099ff] to-[#0044cc] skew-y-[-7deg] -top-60"></div>

//       {/* Background Pattern */}
//       <div className="absolute inset-0">
//         <img
//           src={bg1}
//           alt="Background 1"
//           className="absolute -top-60 left-0 w-full h-auto"
//           style={{
//             transform: `translate(${moveAmountX}px, ${moveAmountY}px)`,
//           }}
//         />
//         <img
//           src={bg2}
//           alt="Background 2"
//           className="absolute bottom-32 right-0 w-full h-auto"
//           style={{
//             transform: `translate(${-moveAmountX}px, ${-moveAmountY}px)`,
//           }}
//         />
//         <img
//           src={bg3}
//           alt="Background 3"
//           className="absolute -top-60 left-0 w-full h-auto "
//           style={{
//             transform: `translate(${moveAmountX}px, ${moveAmountY}px)`,
//           }}
//         />
//         <img
//           src={bg4}
//           alt="Background 4"
//           className="absolute -top-60 right-0 w-full h-auto "
//           style={{
//             transform: `translate(${-moveAmountX}px, ${-moveAmountY}px)`,
//           }}
//         />
//       </div>

//       {/* Bottom Slant with Orange Accent */}
//       <div
//         className="absolute bottom-32 left-0 w-full h-[110px] bg-gradient-to-r from-orange-400 to-[#004094] skew-y-[-6deg] origin-bottom-left"
//         style={{ clipPath: 'polygon(0% 80%, 100% 40%, 100% 100%, 0% 100%)' }}
//       ></div>

//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col justify-center pl-72 text-white mb-32">
//         <p className="text-teal-300 uppercase tracking-wide text-sm">
//           About Us
//         </p>
//         <h2 className="text-8xl font-medium max-w-4xl leading-tight">
//           Paving the way <br /> ahead for finance
//         </h2>
//         <p className="mt-4 text-lg max-w-xl opacity-80">
//           We’re building technologies that will power the future of banking and
//           beyond
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import bg1 from '../../../../assets/backgrounds/WaveLinesDesktop1.svg';
import bg2 from '../../../../assets/backgrounds/WaveLinesDesktop2.svg';
import bg3 from '../../../../assets/backgrounds/WaveLinesDesktop3.svg';
import bg4 from '../../../../assets/backgrounds/WaveLinesDesktop4.svg';
import Hero from '../../../../common/Hero/Hero';

const Page = () => {
  const backgroundImages = [
    {
      src: bg1,
      alt: 'Background 1',
      position: '-top-60 left-0',
      directionX: 1,
      directionY: 1,
    },
    {
      src: bg2,
      alt: 'Background 2',
      position: 'bottom-32 right-0',
      directionX: -1,
      directionY: -1,
    },
    {
      src: bg3,
      alt: 'Background 3',
      position: '-top-60 left-0',
      directionX: 1,
      directionY: 1,
    },
    {
      src: bg4,
      alt: 'Background 4',
      position: '-top-60 right-0',
      directionX: -1,
      directionY: -1,
    },
  ];

  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Paving the way ahead for finance"
        description="We’re building technologies that will power the future of banking and beyond."
        backgroundImages={backgroundImages}
        gradientColors="from-[#0099ff] to-[#0044cc]"
        accentColors="from-orange-400 to-[#004094]"
      />
      {/* Other content goes here */}
    </div>
  );
};

export default Page;
