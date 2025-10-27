import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
      style={{ backgroundImage: "url('/services-bg.jpg')" }}
    >
      <div className="bg-black/60 p-10 rounded-2xl max-w-4xl">
        <h2 className="text-5xl font-extrabold mb-6 text-orange-400">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-200 font-medium">
          <div className="p-6 bg-black/50 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2 text-white">Web Design</h3>
            <p><b>Creating visually appealing, responsive websites.</b></p>
          </div>
          <div className="p-6 bg-black/50 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2 text-white">Brand Identity</h3>
            <p><b>Designing logos, color palettes, and brand guidelines.</b></p>
          </div>
          <div className="p-6 bg-black/50 rounded-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2 text-white">UI/UX Design</h3>
            <p><b>Designing intuitive user interfaces and experiences.</b></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
