import { Lightbulb, Grid } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Card = () => {
  const cardData = [
    {
      icon: <Lightbulb className="text-blue-900" />,
      title: 'Consult',
      description:
        'Our breadth of consulting expertise spans from applying the latest financial technological innovations to implementing risk-control strategies.',
    },
    {
      icon: <Grid className="text-blue-900" />,
      title: 'Implement',
      description:
        'Combining deep technological expertise and a proven track record, we design and implement custom solutions for financial institutions that drive long-term success.',
    },
    {
      icon: <Grid className="text-blue-900" />,
      title: 'Operate',
      description:
        'We provide a full suite of operational and support services that continue throughout the product life cycle.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 mb-24">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border-2 border-blue-100 shadow-sm rounded-xl p-8 max-w-sm hover:bg-blue-50"
          data-aos="fade-up"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-200 rounded-full mr-4">
              {card.icon}
            </div>
            <h3 className="text-2xl font-semibold text-blue-950">
              {card.title}
            </h3>
          </div>
          <p className="text-gray-600 mt-4">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
