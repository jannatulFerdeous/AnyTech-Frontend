import chart_body from '../../../../assets/icons/easy-banking/Bridge.svg';
import line1 from '../../../../assets/icons/easy-banking/Line1.svg';
import line2 from '../../../../assets/icons/easy-banking/Line2.svg';
import line3 from '../../../../assets/icons/easy-banking/Line3.svg';
import line4 from '../../../../assets/icons/easy-banking/Line4.svg';

import Cards from './partials/cards';

const Philosophy = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-16 px-6 ">
        <h3 className="text-blue-600 font-semibold text-xl uppercase">
          Our Philosophy
        </h3>
        <h2 className="text-6xl font-bold text-blue-950 mt-2 mb-12">
          Human-centred innovation
        </h2>

        <div className="grid grid-cols-3 gap-16 relative">
          {/* Left Card */}
          <div className="col-span-1 px-20 py-32 bg-blue-50 rounded-3xl w-auto relative">
            <div className="bg-white px-10 py-6 rounded-lg shadow-xl shadow-blue-200">
              <h2 className="text-center text-xs font-bold text-blue-600">
                CORE TECH
              </h2>
              <p className="text-center text-2xl font-semibold text-blue-950 mt-3">
                Artificial <br /> Intelligence
              </p>
            </div>
          </div>

          {/* Line1 Image Above Middle Chart */}
          <img
            src={line4}
            alt="Line 1"
            className="absolute z-50 left-[410px] top-[37%] w-32 transform -translate-x-1/2 h-20 fill-blue-50"
          />

          {/* Image in the middle */}
          <img
            src={chart_body}
            alt="Chart Body"
            className="absolute left-[410px]  w-96 transform -translate-x-1/2 rotate-90 top-1/2 -translate-y-1/2 h-20 fill-blue-50"
          />

          {/* Line3 on the opposite side */}
          <img
            src={line2}
            alt="Line 3"
            className="absolute z-50 right-[489px] top-[57%] -rotate-90  w-40 transform  h-20 fill-blue-50"
          />

          {/* Right Section */}
          <div className="col-span-2 p-9 right-6 bg-blue-50 rounded-3xl relative">
            <img
              src={line3}
              alt="Line 3"
              className="absolute z-50 left-[300px] top-[17%] -rotate-90 w-40 transform -translate-x-1/2 h-20 fill-blue-50"
            />

            <div className="flex gap-12 mx-9 my-6">
              <img
                src={line1}
                alt="Line 1"
                className="absolute z-50 left-[470px] top-[41%] w-32 transform -translate-x-1/2 h-20 fill-blue-50"
              />
              <div className="bg-white px-10 mt-20 pt-8 h-32 rounded-lg shadow-xl shadow-blue-200">
                <h2 className="text-center text-xs font-bold text-orange-500">
                  MECHANISM
                </h2>
                <p className="text-center text-2xl font-semibold text-blue-950 mt-3">
                  Blockchain
                </p>
              </div>

              <div className="flex flex-col gap-16">
                <div className="bg-white px-10 py-10 rounded-lg shadow-b">
                  <h2 className="text-center text-xs font-bold text-teal-300">
                    INFRASTRUCTURE
                  </h2>
                  <p className="text-center text-2xl font-semibold text-blue-950 mt-3">
                    Cloud
                  </p>
                </div>

                <div className="bg-white px-24 py-10 rounded-lg shadow-b">
                  <h2 className="text-center text-xs font-bold text-yellow-300">
                    RESOURCE
                  </h2>
                  <p className="text-center text-2xl font-semibold text-blue-950 mt-3">
                    Data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Philosophy;
