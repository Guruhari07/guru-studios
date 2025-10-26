import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
