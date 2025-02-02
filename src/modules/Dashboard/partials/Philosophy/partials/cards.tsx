import { Lightbulb, Link, Settings } from 'lucide-react';

const Cards = () => {
  const cardData = [
    {
      icon: <Link />,
      title: 'Full-suite solutions',
      description:
        'Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.',
      bgColor: 'bg-blue-100',
    },
    {
      icon: <Lightbulb />,
      title: 'Simplify the complex',
      description:
        'Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.',
      bgColor: 'bg-green-100',
    },
    {
      icon: <Settings />,
      title: 'Cutting-edge tech',
      description:
        'We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.',
      bgColor: 'bg-red-100',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-16 p-2 mb-24">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-blue-50 shadow-lg rounded-xl p-6 max-w-sm"
        >
          <div
            className={`w-12 h-12 flex items-center justify-center ${card.bgColor} rounded-full`}
          >
            <span className="text-2xl">{card.icon}</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-4">
            {card.title}
          </h3>
          <p className="text-gray-600 mt-4">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
