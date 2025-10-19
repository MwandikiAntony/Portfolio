import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-sm py-8 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left Section */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Antony Mwandiki
          </span>
          . All rights reserved.
        </p>

        {/* Right Section */}
        <div className="flex gap-6 justify-center sm:justify-end">
          <a
            href="https://github.com/MwandikiAntony"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/antony-mwandiki-36a788255/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="mailto:antonymwandiki26@gmail.com"
            aria-label="Email"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
