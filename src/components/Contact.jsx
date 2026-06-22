import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_noerryn", // your service ID
        "template_55zmiv8", // your template ID
        form.current,
        "LANWS0Uh8ERLWShip", // your public key/user ID
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
        },
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen  bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-6 py-20 font-sans "
    >
      <div className=" hover:shadow-green-600 hover:cursor-pointer w-full max-w-6xl bg-white rounded-3xl shadow-xl p-10 md:p-14 flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-8">
            Get in Touch
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition"
            />
            <textarea
              name="title"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition resize-none"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-xl text-lg transition duration-300"
            >
              Send Message
            </button>
            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm mt-2">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-green-50 rounded-2xl p-8 shadow-inner">
          <h3 className="text-3xl font-bold text-green-800 mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-700 mb-6">
            Prefer not to use the form? Reach out on:
          </p>
          <div className="flex flex-col gap-4 text-lg">
            <a
              href="tel:+919939997468"
              className="flex items-center gap-3 text-gray-800 hover:text-green-700 transition"
            >
              <FaPhone size={22} /> Phone
            </a>
            <a
              href="mailto:rhnkmrgpta@gmail.com"
              className="flex items-center gap-3 text-gray-800 hover:text-green-700 transition"
            >
              <FaEnvelope size={22} /> Mail
            </a>
            <a
              href="https://www.linkedin.com/in/rohhangupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-800 hover:text-green-700 transition"
            >
              <FaLinkedin size={22} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
