import { Landmark, CreditCard, PieChart } from 'lucide-react';

const BottomCards = () => {
  const cards = [
    {
      title: "Consult",
      description:
        "Our breadth of consulting expertise spans from applying the latest financial technological innovations to implementing risk-control strategies.",
      icon: <PieChart size={44} />,
    },
    {
      title: "Implement",
      description:
        "Combining deep technological expertise and a proven track record, we design and implement custom solutions for financial institutions that drive long-term success.",
      icon: <CreditCard size={44} />,
    },
    {
      title: "Operate",
      description:
        "We provide a full suite of operational and support services that continue throughout the product life cycle.",
      icon: <Landmark size={44} />,
    },
  ];

  return (
    <div className="flex flex-col items-start mx-4 lg:mx-64 mt-8 mb-11">
      {/* Cards Section */}
      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white rounded-xl p-6 shadow-md border border-blue-200 hover:shadow-lg transition duration-300"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <div className="text-blue-600">{card.icon}</div>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomCards;
