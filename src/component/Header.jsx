import logo from '../assets/logo.png';
import Button from './Button';
import { toast } from 'react-hot-toast';

export default function Header() {
  const comingSoon = () => {
    toast.success("Coming Soon! Stay tuned for updates.");
  };
  return (
    <div className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Elpx Logo" className="h-14" />
      </div>

      <nav className="hidden font-semibold md:flex space-x-8 text-sm text-gray-700">
        <a href="#">Campaigns</a>
        <a href="#">About</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
      </nav>

      <div className="hidden sm:flex items-center space-x-2">
        <Button variant="outline" onClick={comingSoon}>Login</Button>
        <Button variant="primary" onClick={comingSoon}>Create a Campaign</Button>
      </div>
    </div>
  );
}
