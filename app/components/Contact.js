import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      <div className="bg-black/60 p-10 rounded-2xl max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-6 text-orange-400">Contact me</h2>
        <p className="text-lg text-gray-200 mb-4 font-medium">
          Ready to start your next big project? Let’s collaborate!
        </p>
        <p className="text-white text-xl font-semibold">
          contact: guruhari1357@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
