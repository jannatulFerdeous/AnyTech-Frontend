import { ChartNoAxesCombined, CreditCard, Landmark } from 'lucide-react';
import bg1 from '../../../../assets/backgrounds/power.jpg';
import line2 from '../../../../assets/frames/founder/2.svg';
import line3 from '../../../../assets/frames/founder/3.svg';

const Power = () => {
  return (
    <div className="relative">
      <div className="absolute w-full min-h-screen bg-gradient-to-tr from-[#0044cc]/5  to-white skew-y-[-6deg] -top-40"></div>
      <div className="flex items-center justify-between mx-64 -mt-12   mb-11 relative">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-left">
          <h4 className="text-blue-600 text-base font-semibold tracking-wider">
            POWERING THE FUTURE OF FINANCE
          </h4>
          <h1 className="text-6xl font-bold text-blue-950 mt-2 leading-tight">
            Uncovering new ways to delight customers
          </h1>
          <p className="mt-4 text-blue-950 font-medium">
            <span className="font-bold">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </span>{' '}
          </p>
          <p className="mt-3 text-blue-950">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>

        {/* Right Section - Image with Overlays */}
        <div className="relative">
          {/* Background diagonal lines */}
          <img
            src={line3}
            alt="Line Decoration"
            className="absolute -top-24 -left-16 w-72 opacity-60 rotate-180"
          />
          <img
            src={line2}
            alt="Line Decoration"
            className="absolute -top-24 right-0.5 w-96 opacity-70 rotate-180"
          />
          <img
            src={line2}
            alt="Line Decoration"
            className="absolute -top-24 right-20 w-48 opacity-70 rotate-180"
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
            <div className="absolute bottom-4 -right-11">
              <img
                src={line2}
                alt="Line Decoration"
                className="z-10 right-20 w-48 rotate-180"
              />
            </div>
          </div>

          {/* Floating Icons with Animation */}
          <div className="absolute top-24 -left-8 p-[10px] rounded-full shadow-md z-20 bg-gradient-to-b from-blue-500 to-orange-500/40 animate-float">
            <div className="bg-white p-2 rounded-full text-blue-600">
              <CreditCard size={44} />
            </div>
          </div>

          <div className="absolute bottom-64 left-16 p-[10px] rounded-full shadow-md z-20 bg-gradient-to-b from-blue-500 to-cyan-500/30 animate-float">
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
    </div>
  );
};

export default Power;
