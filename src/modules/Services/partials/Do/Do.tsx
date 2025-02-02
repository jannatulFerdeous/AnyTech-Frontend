import { ChartNoAxesCombined, CreditCard, Landmark } from 'lucide-react';
import bg1 from '../../../../assets/backgrounds/do.jpg';
import line2 from '../../../../assets/frames/founder/2.svg';
import line3 from '../../../../assets/frames/founder/3.svg';
import Card from '../Card/Card';

const Do = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between mx-64 -mt-12   mb-11 relative ">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-left">
          <h4 className="text-blue-600 text-base font-semibold tracking-wider">
            WHAT WE DO
          </h4>
          <h1 className="text-6xl font-bold text-blue-950 mt-2 leading-tight">
            The power of data
          </h1>
          <p className="mt-4 text-blue-950 font-medium">
            <span className="font-bold">
              In today's rapidly evolving financial landscape, banks and
              financial institutions face unprecedented challenges. At AnyTech,
              we understand the critical need for continuous innovation and
              strategic decision-making in order to thrive.
            </span>{' '}
          </p>
          <p className="mt-3 text-blue-950">
            With our global perspective and cutting-edge solutions, we are here
            to help you create unparalleled customer experiences that will set
            you apart from the competition. Embark on a journey of
            transformation with AnyTech—one that will redefine what’s possible
            for your institution.
          </p>
        </div>

        {/* Right Section - Image with Overlays */}
        <div className="relative">
          {/* Background diagonal lines */}
          <img
            src={line3}
            alt="Line Decoration"
            className="absolute -top-20 -left-16 w-72 opacity-60 rotate-180"
          />

          <img
            src={line3}
            alt="Line Decoration"
            className="absolute -bottom-10 right-0 w-48 opacity-70"
          />

          {/* Main Image */}
          <div className="relative">
            <img
              src={bg1}
              alt="Financial Tech"
              className="w-[500px] h-[590px] object-cover shadow-md"
            />
          </div>

          {/* Floating Icons with Animation */}

          <div className="absolute bottom-64  p-[13px] rounded-full shadow-md z-20 bg-gradient-to-b from-blue-500 to-cyan-500/30 animate-float">
            <div className="bg-white p-2 rounded-full text-blue-600">
              <ChartNoAxesCombined size={54} />
            </div>
          </div>

          <div className="absolute top-10 -right-14 p-[12px] rounded-full shadow-md z-20 bg-gradient-to-b from-blue-500 to-purple-500/20 animate-float">
            <div className="bg-white p-2 rounded-full text-blue-600">
              <Landmark size={66} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Card />
      </div>
    </div>
  );
};

export default Do;
