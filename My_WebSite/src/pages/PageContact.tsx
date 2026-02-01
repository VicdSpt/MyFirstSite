import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import RobinHood from "../images/RHB.gif";

// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_6ldgsbf"; 
const EMAILJS_TEMPLATE_ID = "template_zz9rocs"; 
const EMAILJS_PUBLIC_KEY = "2tOC2UrAMNXIOtVb7"; 

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section className=" min-h-screen bg-neutral-100 dark:bg-zinc-800 p-8 lg:p-16 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="py-20 text-5xl font-bold text-center text-black dark:text-white mb-4">
            Get in touch
          </h1>
          <p className="text-black dark:text-gray-200 leading-relaxed">
            If you would like to connect or discuss potential opportunities,
            feel free to get in touch. I would be happy to chat and explore how
            I can add value to your team.
          </p>
          <div className="flex justify-center mt-6">
            <img src={RobinHood} alt="Robin Hood" className="rounded-2xl" />
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-black dark:text-white mb-2"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-zinc-700 border border-slate-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black dark:text-white placeholder-slate-500 dark:placeholder-gray-400 transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-black dark:text-white mb-2"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-100 dark:bg-zinc-700 border border-slate-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black dark:text-white placeholder-slate-500 dark:placeholder-gray-400 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black dark:text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-100 dark:bg-zinc-700 border border-slate-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black dark:text-white placeholder-slate-500 dark:placeholder-gray-400 transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-black dark:text-white mb-2"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-100 dark:bg-zinc-700 border border-slate-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black dark:text-white placeholder-slate-500 dark:placeholder-gray-400 transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black dark:text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-slate-100 dark:bg-zinc-700 border border-slate-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black dark:text-white placeholder-slate-500 dark:placeholder-gray-400 resize-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 font-medium">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 font-medium">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
