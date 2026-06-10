const ServiceCard = ({ title, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-300">
      <div className="text-6xl mb-4">
        {icon}
      </div>

      <h2 className="text-2xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default ServiceCard;