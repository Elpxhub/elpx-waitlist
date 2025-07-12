import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full my-8 border-gray-200 bg-white text-sm font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="max-w-sm space-y-4">
          <img src={logo} alt="Elpx Logo" className="h-14" />
          <p className="text-gray-600 leading-6">
            Your support can change lives and build brighter futures. Join us in
            making a difference today.
          </p>
        </div>

        {/* Center Links */}
        <div className="grid grid-cols-2 gap-8 md:gap-12">
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  Campaigns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  About Elpx
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold text-gray-900 hover:underline"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Social Media */}
        <div className="space-y-4">
          <p className="font-semibold text-gray-900">Social Media</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-gray-100"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-gray-100"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-gray-100"
            >
              <FaXTwitter className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Links */}
      <div className="border-t border-gray-200 mt-6 pt-4 pb-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2025 Elpx. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms of use
          </a>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
