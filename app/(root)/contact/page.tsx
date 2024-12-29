"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [status, setStatus] = useState("");

  interface EmailJSResponse {
    text: string;
  }

  interface EmailJSError {
    text: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u649y0i",
        "template_qwn6d83",
        e.target as HTMLFormElement,
        {
          publicKey: "yMN-k1fnQZjnrX1j7",
        }
      )
      .then(
        (result: EmailJSResponse) => {
          console.log(result.text);
          setStatus("Message sent.");
        },
        (error: EmailJSError) => {
          console.log(error.text);
          setStatus("Please try again.");
        }
      );
  };

  return (
    <>
      <h1>Let’s Talk.</h1>
      <div className="md:h-96 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-light md:-mt-20 text-center md:text-justify">
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
            className="bg-transparent border-b-2 p-2 focus:outline-none placeholder:font-light placeholder:text-xl rounded-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-b-2 p-2 focus:outline-none placeholder:font-light placeholder:text-xl rounded-none"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border-b-2 p-2 focus:outline-none h-48 resize-none overflow-hidden placeholder:font-light placeholder:text-xl rounded-none"
            required
          />
          <button
            type="submit"
            className="w-32 self-end mt-4 p-2 text-xl font-light transition:bg duration-150 ease-in-out rounded-xl border-dotted border button"
          >
            Send
          </button>
          <div className="relative w-full flex justify-center items-center">
            {status && (
              <p className="absolute text-center text-lg font-light fade-in mt-10">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
