import { useEffect, useState, useRef } from "react";

const Count = () => {
  const [counts, setCounts] = useState({
    years: 0,
    institutions: 0,
    customers: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Intersection Observer to detect when the section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCounts((prev) => ({
        years: prev.years < 20 ? prev.years + 1 : 20,
        institutions: prev.institutions < 40 ? prev.institutions + 1 : 40,
        customers: prev.customers < 200 ? prev.customers + 10 : 200,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className={`text-center py-12 transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="text-blue-600 font-semibold text-sm">TRUSTED BY THE BEST</h3>
      <div className="flex justify-center gap-16 text-blue-600 mt-4 text-8xl font-bold">
        <div>
          <p>{`>${counts.years}`}</p>
          <span className="text-gray-600 text-base">Years of Experience</span>
        </div>
        <div>
          <p>{`${counts.institutions}+`}</p>
          <span className="text-gray-600 text-base">Financial Institutions</span>
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
