import bg1 from "../../../../assets/backgrounds/power.jpg";
import line2 from "../../../../assets/frames/founder/2.svg";
import line3 from "../../../../assets/frames/founder/3.svg";

const Power = () => {
  return (
    <div className="flex items-center justify-between mx-48 bg-white -mt-12 mb-11 relative">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 text-left">
        <h4 className="text-blue-600 text-sm font-semibold tracking-wider">
          POWERING THE FUTURE OF FINANCE
        </h4>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
          Uncovering new ways to delight customers
        </h1>
        <p className="mt-4 text-gray-700 font-medium">
          <span className="font-bold">
            AnyTech is revolutionising financial technology
          </span>{" "}
          by introducing innovative and real-time transaction account processing
          capabilities, specifically designed for retail financial services.
        </p>
        <p className="mt-3 text-gray-600">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      {/* Right Section - Image with Overlays */}
      <div className="relative">
        {/* Background diagonal lines */}
        <img src={line3} alt="Line Decoration" className="absolute -top-24 -left-16 w-72  opacity-60 rotate-180" />
        <img src={line2} alt="Line Decoration" className="absolute -top-24 right-0.5 w-96 opacity-70 rotate-180" />
        <img src={line2} alt="Line Decoration" className="absolute -top-24 right-20 w-48 opacity-70 rotate-180" />
        <img src={line3} alt="Line Decoration" className="absolute -bottom-6 right-2 w-24 opacity-70" />

        {/* Main Image */}
        <img
          src={bg1}
          alt="Financial Tech"
          className="w-[500px] h-[550px] object-cover shadow-md relative z-10"
        />

        {/* Floating Icons */}
        <div className="absolute top-8 -left-8 bg-white p-2 rounded-full shadow-md z-20">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/bank-card-back-side.png"
            alt="Card Icon"
            className="w-10 h-10"
          />
        </div>
        <div className="absolute bottom-12 left-1/3 bg-white p-2 rounded-full shadow-md z-20">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/combo-chart.png"
            alt="Chart Icon"
            className="w-10 h-10"
          />
        </div>
        <div className="absolute top-10 -right-6 bg-white p-2 rounded-full shadow-md z-20">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/bank.png"
            alt="Bank Icon"
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Power;
