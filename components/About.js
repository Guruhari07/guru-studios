export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-900 text-white max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg md:text-xl">
          We are a creative design studio focused on branding and web design. 
          We craft digital experiences that stand out and leave a lasting impression.
        </p>
      </div>
      <div className="md:w-1/2">
        <img src="/about-img.jpg" alt="About Guru Studios" className="rounded shadow-lg" />
      </div>
    </section>
  );
}
