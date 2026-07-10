import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSocial() {
  return (
    <div className="mt-8 flex items-center gap-5">
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-400 transition-all duration-300 hover:text-purple-400"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/your-linkedin"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-gray-400 transition-all duration-300 hover:text-purple-400"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:your@email.com"
        className="text-2xl text-gray-400 transition-all duration-300 hover:text-purple-400"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}