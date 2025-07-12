import WaitlistForm from "../component/WaitlistForm";
import logo from "../assets/logo.png";
import RightImage from "../assets/rightimage.svg";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Landing() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center items-start p-8 space-y-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Elpx Logo" className="h-[90px]" />
            <span className="bg-yellow-100 text-[#B78103] font-bold px-2 py-1 rounded text-xs">
              Coming Soon
            </span>
          </div>
          <div className="max-w-[408px]">
            <h1 className="text-[48px] font-bold leading-tight font-sans">
              Get early access!
            </h1>
            <p className="text-gray-800 text-[18px] leading-7 font-sans mt-2">
              Be one of the first to create a campaign or make a donation. Join
              our waitlist.
            </p>
          </div>

          <WaitlistForm />
        </div>
        <div className="hidden md:flex md:w-1/2 bg-[#00AB55] justify-center items-center">
          <img
            src={RightImage}
            alt="App Preview"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
