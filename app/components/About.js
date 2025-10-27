import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
      style={{ backgroundImage: "url('/about-bg.jpg')" }}
    >
      <div className="bg-black/60 p-10 rounded-2xl max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-6 text-orange-400">About</h2>
        <p className="text-lg text-gray-200 leading-relaxed font-medium">
          <span className="text-white font-bold"> 
            I'm focused on creative UI/UX design, branding, and digital design that bring ideas to life. <br />
            I also specialize in website creation, crafting visually engaging and functional online experiences. <br />
            Additionally,I work on video editing and content creation for social media platforms.</span>
        </p>
      </div>
    </section>
  );
};

export default About;
