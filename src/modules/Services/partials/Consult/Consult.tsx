import {User } from 'lucide-react';
import bg1 from '../../../../assets/backgrounds/power.jpg';
import line3 from '../../../../assets/frames/founder/1.png';
import line4 from '../../../../assets/frames/founder/3.svg';
import line from "../../../../assets/backgrounds/WaveLinesDesktop4.svg"

const Consult = () => {
  return (
    <div className="relative">
      <div className="absolute w-full min-h-screen bg-gradient-to-tr from-[#0044cc]/5  to-white skew-y-[-6deg] top-1"></div>
      <div className="flex items-center justify-between mx-64 -mt-12   mb-11 relative">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-left">
          <h4 className="text-blue-600 text-base font-semibold tracking-wider uppercase">
          Taking the First Step
          </h4>
          <h1 className="text-5xl font-bold text-blue-950 mt-2 leading-tight">
            Consult
          </h1>
          <p className="mt-4 text-blue-950 font-medium">
            <span className="font-bold">
            Taking the leap towards digital transformation with the ambition of delivering augmented value in financial services can be daunting.
            </span>{' '}
          </p>
          <p className="mt-3 text-blue-950">
          Tap on the vast experience and deep knowledge of our experts. Our breadth of consulting expertise spans from applying the latest financial technological innovations to implementing risk-control strategies.
          </p>
        </div>

        {/* Right Section - Image with Overlays */}
        <div className="relative">
          {/* Background diagonal lines */}
          <img
            src={line3}
            alt="Line Decoration"
            className="absolute -top-7 -left-16 z-50 w-52 animate-float"
          />
          
          <img
            src={line4}
            alt="Line Decoration"
            className="absolute -bottom-10 ml-56 w-44 opacity-70"
          />

          {/* Main Image */}
          <div className="relative">
            <img
              src={bg1}
              alt="Financial Tech"
              className="w-[350px] h-[400px] object-cover shadow-md"
            />
            
          </div>

          {/* Floating Icons with Animation */}
          

          <div className="absolute top-0 -right-14 p-[12px] rounded-full shadow-md z-20 bg-gradient-to-b from-blue-500 to-purple-500/20 animate-float">
            <div className="bg-white p-2 rounded-full text-blue-600">
              <User size={55} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center my-16 px-8 mx-10">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-10 w-3/4 flex items-center justify-between shadow-lg relative overflow-hidden">
        {/* Background diagonal patterns */}
        <div className="absolute top-0 left-0 w-full h-full  opacity-10">
          <img src= {line} className='w-96'/>
        </div>
        
        {/* Left Side - Text */}
        <div className="text-white max-w-lg z-10">
          <h2 className="text-3xl font-bold">Start your transformation</h2>
          <p className="mt-2 text-lg">
            We are ready to serve as strategic partners to provide your organisation with the support you need.
          </p>
        </div>
        
        {/* Right Side - Button */}
        <div className="z-10">
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
            Talk to Us ›
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Consult;
