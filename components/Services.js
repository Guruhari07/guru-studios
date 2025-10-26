export default function Services() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 bg-gray-800 rounded">Web Design</div>
        <div className="p-6 bg-gray-800 rounded">Brand Identity</div>
        <div className="p-6 bg-gray-800 rounded">UI/UX Design</div>
      </div>
    </section>
  );
}
