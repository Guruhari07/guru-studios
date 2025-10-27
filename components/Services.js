export default function Services() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 bg-gray-800 rounded shadow hover:bg-gray-700 transition">
          <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
          <p>Creating visually appealing, responsive websites.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded shadow hover:bg-gray-700 transition">
          <h3 className="text-2xl font-semibold mb-2">Brand Identity</h3>
          <p>Designing logos, color palettes, and brand guidelines.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded shadow hover:bg-gray-700 transition">
          <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
          <p>Designing intuitive user interfaces and experiences.</p>
        </div>
      </div>
    </section>
  );
}
