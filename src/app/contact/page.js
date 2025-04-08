// app/contact/page.js
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">CONTACT US</h1>
      <ContactForm />
    </div>
  );
}
