import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "./config/constants";

const Slider = () => {
  const sliderData = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  return (
    <div className="py-7 overflow-hidden">
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        <div className="text-center">
          <h6 className="text-blue-600 font-semibold text-base tracking-widest">
            TECHNOLOGY BUILT FOR YOU
          </h6>
          <h6 className="text-blue-950 font-semibold text-6xl mt-4">
            The Future of Finance
          </h6>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {sliderData.map((item, index) => (
            <button
              key={item.id}
              className={`px-8 py-3 rounded-full font-semibold ${
                currentIndex === index
                  ? "bg-blue-50 text-blue-600"
                  : "text-blue-600"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Slider with Animation */}
        <div className="relative w-full flex justify-between items-center bg-white shadow-md shadow-blue-500/10 rounded-lg mt-8 m-10  px-9 py-9 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex w-full items-center gap-10"
            >
              <div className="max-w-lg">
                <h1 className="text-blue-600 font-semibold">{sliderData[currentIndex].title}</h1>
                <h2 className="text-4xl font-semibold text-blue-950 mt-5">
                  {sliderData[currentIndex].subtitle}
                </h2>
                <p className="text-sm text-blue-950 font-semibold mt-6">
                  {sliderData[currentIndex].des1}
                </p>
                <p className="text-sm text-blue-950 mt-6">{sliderData[currentIndex].des2}</p>
              </div>
              <div className="w-1/2">
                <img
                  src={sliderData[currentIndex].img}
                  alt={sliderData[currentIndex].title}
                  className="w-full rounded-md"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slider;
