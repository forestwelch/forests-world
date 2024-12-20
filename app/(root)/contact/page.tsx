"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    // // Use EmailJS or Formspree to send the email
    // // For example, using EmailJS:
    // emailjs
    //   .sendForm("your_service_id", "your_template_id", e.target, "your_user_id")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       // Optionally show a success message here
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       // Optionally show an error message here
    //     }
    //   );
  };

  return (
    <section className="p-20 flex flex-col gap-12 fade-in h-full justify-center items-center">
      <h1 className="text-8xl font-thin text-center">Let’s Talk.</h1>
      <div className="md:h-96 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-light md:-mt-20 text-justify">
            I enjoy working with dedicated teams that want to make the world a
            better, easier place to live.
            <br />
            <br />
            Let&apos;s make something beautiful together.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md h-full flex flex-col gap-6 p-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent border-b-2 p-2 focus:outline-none placeholder:font-light placeholder:text-xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-b-2 p-2 focus:outline-none placeholder:font-light placeholder:text-xl"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border-b-2 p-2 focus:outline-none h-48 resize-none placeholder:font-light placeholder:text-xl"
            required
          />
          <button
            type="submit"
            className="w-32 self-end mt-4 p-2 text-xl font-light transition:bg duration-2000 rounded-xl border-dotted border"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
