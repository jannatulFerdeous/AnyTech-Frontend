import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Count = () => {
  const [counts, setCounts] = useState({
    years: 0,
    institutions: 0,
    customers: 0,
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setCounts(prev => ({
        years: prev.years < 20 ? prev.years + 1 : 20,
        institutions: prev.institutions < 40 ? prev.institutions + 1 : 40,
        customers: prev.customers < 200 ? prev.customers + 10 : 200,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-12">
      <h3 className="text-blue-600 font-semibold text-sm">
        TRUSTED BY THE BEST
      </h3>
      <div
        className="flex justify-center gap-16 text-blue-600 mt-4 text-7xl font-bold"
        data-aos="fade-up"
      >
        <div>
          <p>{`>${counts.years}`}</p>
          <span className="text-gray-600 text-base">Years of Experience</span>
        </div>
        <div>
          <p>{`${counts.institutions}+`}</p>
          <span className="text-gray-600 text-base">
            Financial Institutions
          </span>
        </div>
        <div>
          <p>{`>${counts.customers}m`}</p>
          <span className="text-gray-600 text-base">Customers Each</span>
        </div>
      </div>
    </div>
  );
};

export default Count;
