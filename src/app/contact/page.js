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
    <section className="py-12 px-4 max-w-2xl font-montserrat mx-auto flex flex-col">
      <h1 className="text-5xl font-bold mb-6 text-center text-[#00274C]">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        // className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"
        className="space-y-6 bg-white p-6 rounded-xl"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-lg font-bold text-[#00274C]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-[#D9D9D9]focus:ring focus:ring-blue-200 focus:outline-none focus:bg-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-lg font-bold text-[#00274C]">
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
          <label htmlFor="message" className="block mb-1 text-lg font-bold text-[#00274C]">
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
          className="h-10 w-40 py-2 px-4 self-center bg-[#00274C] text-[#F3C300] font-bold rounded-lg hover:bg-[#1c5f99] transition duration-300 cursor-pointer"
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
