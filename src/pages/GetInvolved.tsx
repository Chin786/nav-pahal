import { Link } from "react-router-dom";
import Volunteers from "../components/Volunteers";

export default function GetInvolved() {
  return (
    <>
      <div className="pt-28 bg-[#f7f9fb]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0072CE] font-headline">
            Get Involved
          </h1>
          <div className="w-16 h-1 bg-[#72BF44]" />
          <p className="text-[#44474e] text-base leading-relaxed max-w-2xl">
            There are many ways to contribute to Navpahal&apos;s mission. Whether through
            volunteering, mentoring, or partnering, your participation helps build stronger
            communities.
          </p>
        </div>
      </div>
      <Volunteers />
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
