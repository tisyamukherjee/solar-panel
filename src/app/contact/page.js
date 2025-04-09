"use client";

import React, { useState } from "react";
import { sendMail } from "@/lib/send-mail";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResultMessage("");

    const res = await sendMail(form);
    setIsSending(false);

    if (res?.success) {
      setResultMessage("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setResultMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="py-12 px-4 max-w-2xl font-montserrat mx-auto">
      <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {resultMessage && (
          <p className="text-center text-sm text-gray-700 mt-2">{resultMessage}</p>
        )}
      </form>
    </section>
  );
}
