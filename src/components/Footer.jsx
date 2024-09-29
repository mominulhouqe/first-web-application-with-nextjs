import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4">About Me</h4>
            <p className="text-gray-300">
              A passionate web developer dedicated to creating beautiful and
              functional websites that make a difference.
            </p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/#projects"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Projects
              </Link>
              <Link
                href="/#blog"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-2xl font-bold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link
                href="https://github.com/mominulhouqe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mominul-hoque-290340217/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://twitter.com/yourtwitterhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter />
              </Link>
              <Link
                href="mailto:youremail@example.com"
                className="text-2xl hover:text-blue-400 transition-colors duration-300"
              >
                <FaEnvelope />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Mominul Houqe. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
