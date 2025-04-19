"use client";

import { use, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      // Call email service here
      console.log("Form submitted:", formData);
      setSuccess(true);
    }
  };

  return (
    <section id="contact" className="p-10">
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      {success ? (
        <p className="text-green-500 mt-4">Thank you! Your message has been sent.</p>
      ) : (
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border"
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border"
              placeholder="Your Message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-orange-500 text-white px-5 py-2 rounded">Send Message</button>
        </form>
      )}
    </section>
  );
};

export default Contact;