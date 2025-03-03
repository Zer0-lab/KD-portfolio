import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 px-8 text-center">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-4">Reach me via:</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="text-2xl text-gray-700 hover:text-blue-600"><FaGithub /></a>
        <a href="#" className="text-2xl text-gray-700 hover:text-blue-600"><FaLinkedin /></a>
      </div>
    </section>
  );
}