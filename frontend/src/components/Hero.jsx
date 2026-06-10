const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-6xl font-bold mb-6">
          Find Trusted Local Services
        </h1>

        <p className="text-2xl mb-8">
          Electricians • Plumbers • Mechanics • Cleaners
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-xl font-semibold">
          Explore Services
        </button>
      </div>
    </section>
  );
};

export default Hero;