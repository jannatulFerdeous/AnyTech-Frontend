import {  CreditCard, Landmark } from 'lucide-react';
import bg1 from '../../../../assets/backgrounds/power.jpg';
import line2 from '../../../../assets/frames/founder/2.svg';
import line3 from '../../../../assets/frames/founder/3.svg';
import BottomCards from './partials/bottomCard/BottomCard';

const Implement = () => {
  return (
    <div className="relative">

      <div className="flex items-center justify-between mx-64 -mt-2   mb-11 relative">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-left">
          <h4 className="text-blue-600 text-base font-semibold uppercase tracking-wider">
          seamless execution
          </h4>
          <h1 className="text-5xl font-bold text-blue-950 mt-2 leading-tight">
          Implement
          </h1>
          <p className="mt-6 text-blue-950 font-medium text-sm">
            <span className="font-bold">
            Ensuring sustainable success stems from the ability to seamlessly execute your digital transformation strategies.
            </span>{' '}
          </p>
          <p className="mt-6 text-blue-950 text-sm">
          Combining deep technological expertise and a proven track record, we design and implement custom solutions for financial institutions that drive long-term success.
          </p>
          <p className="mt-6 text-blue-950 text-sm">
          Partner with AnyTech to bring new capabilities faster to market and accelerate revenue generation, increase operational efficiency and enhance the overall customer experience.
          </p>
        </div>

        {/* Right Section - Image with Overlays */}
        <div className="relative">
          {/* Background diagonal lines */}
          
          
          <img
            src={line3}
            alt="Line Decoration"
            className="absolute -bottom-10 ml-64 w-48 opacity-70 animate-float"
          />

          {/* Main Image */}
          <div className="relative">
            <img
              src={bg1}
              alt="Financial Tech"
              className="w-400px] h-[400px] object-cover shadow-md"
            />
            <div className="absolute bottom-4 -right-11">
              <img
                src={line2}
                alt="Line Decoration"
                className="z-10 right-20 w-48 rotate-180"
              />
        
            </div>
          </div>

          {/* Floating Icons with Animation */}
          <div className="absolute top-24 -left-8 p-[10px] rounded-full shadow-md z-20 bg-gradient-to-b from-blue-500 to-cyan-500/50 animate-float">
            <div className="bg-white p-2 rounded-full text-blue-600">
              <CreditCard size={44} />
            </div>
          </div>

         

          <div className="absolute top-10 -right-14 p-[12px] rounded-full shadow-md z-20 bg-gradient-to-b from-blue-500 to-purple-500/20 animate-float">
            <div className="bg-white p-2 rounded-full text-blue-600">
              <Landmark size={66} />
            </div>
          </div>
        </div>
        
      </div>


      <BottomCards/>
    </div>
  );
};

export default Implement