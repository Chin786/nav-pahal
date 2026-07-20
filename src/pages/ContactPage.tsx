import { Link } from "react-router-dom";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <div className="pt-28 bg-[#f7f9fb]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0072CE] font-headline">
            Contact
          </h1>
          <div className="w-16 h-1 bg-[#72BF44]" />
          <p className="text-[#44474e] text-base leading-relaxed max-w-2xl">
            Have a question or want to get in touch? We&apos;d love to hear from you.
          </p>
        </div>
      </div>
      <Contact />
      <div className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Link to="/" className="text-sm font-bold text-[#0072CE] hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
