import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

const Home = () => {
  const services = [
    { title: "Electrician", icon: "⚡" },
    { title: "Plumber", icon: "🚿" },
    { title: "Cleaner", icon: "🧹" },
    { title: "Mechanic", icon: "🔧" },
    { title: "Technician", icon: "💻" },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="p-10 bg-gray-100">
        <h2 className="text-4xl text-center font-bold mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
        
      </section>
      <section className="py-20 bg-slate-100">
  <h2 className="text-5xl font-bold text-center mb-12">
    Our Services
  </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 px-10">
    {services.map((service) => (
      <ServiceCard
        key={service.title}
        title={service.title}
        icon={service.icon}
      />
    ))}
  </div>
</section>

      <Footer />
    </>
  );
};

export default Home;