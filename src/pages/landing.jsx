import WaitlistForm from "../component/WaitlistForm";
import logo from "../assets/logo.png";
import RightImage from "../assets/rightimage.svg";
import Header from "../component/Header";
import Footer from "../component/Footer";
import FloatingLogo from "../component/FloatingLogo";

export default function Landing() {
  return (
    <>
      <Header />

      <div className="relative overflow-hidden">
        {/* Floating background logo (small screens only) */}
        <FloatingLogo />

        {/* Main Content Wrapper */}
        <div className="flex flex-col md:flex-row h-[100dvh] md:h-[calc(100vh-80px)] items-center md:items-stretch relative z-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-6 sm:p-8 space-y-4">
            {/* Logo and Badge */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Elpx Logo"
                className="h-[60px] sm:h-[80px] md:h-[90px]"
              />
              <span className="bg-yellow-100 text-[#B78103] font-bold px-2 py-1 rounded text-[10px] sm:text-xs">
                Coming Soon
              </span>
            </div>

            {/* Text Content */}
            <div className="max-w-full sm:max-w-[408px]">
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-snug sm:leading-tight font-sans">
                Get early access!
              </h1>
              <p className="text-gray-800 text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-sans mt-2">
                Be one of the first to create a campaign or make a donation.
                Join our waitlist.
              </p>
            </div>

            {/* Waitlist Form */}
            <WaitlistForm />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex md:w-1/2 bg-[#00AB55] justify-center items-center">
            <img
              src={RightImage}
              alt="App Preview"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
