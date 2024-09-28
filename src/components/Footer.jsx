import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold">About Me</h4>
            <p className="mt-2">
              A passionate web developer dedicated to creating beautiful and
              functional websites.
            </p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/" className="hover:text-gray-400">
              Projects
            </Link>
            <Link href="/" className="hover:text-gray-400">
              Blog
            </Link>
            <Link href="/" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/mominulhouqe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mominul-hoque-290340217/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} Your Mominul Houqe. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
