export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Welcome to Guru Studios
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-white max-w-2xl">
          Creative agency making digital experiences
        </p>

        {/* CTA Button */}
        <button className="mt-8 px-8 py-3 bg-orange-500 rounded hover:bg-orange-600 transition text-white text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}
