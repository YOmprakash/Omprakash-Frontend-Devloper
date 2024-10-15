
import { FaTelegram, FaInstagram, FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';
import Logo from '../assets/logo.svg';
const Footer = () => {
  return (
    <footer className="py-8 text-white bg-[#0C2B2F] rounded-lg ">
      <div className="container flex flex-col items-center justify-center px-4 mx-auto md:justify-between md:flex-row">
        
        {/* Left Side: Logo and Social Icons */}
        <div className="flex flex-col items-center justify-center mb-4 md:items-start md:mb-0">
          <div className="flex items-center mb-4 md:mr-6">
            <img src={Logo} alt="EthAi Logo" className="w-10" />
            <p className='ml-2 text-4xl font-bold'>EthAi</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://telegram.com" className="hover:text-gray-400">
              <FaTelegram size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://discord.com" className="hover:text-gray-400">
              <FaDiscord size={24} />
            </a>
          </div>
        </div>
        
        {/* Right Side: Quote and Email Input */}
        <div className="hidden text-center md:text-right md:block">
          <p className="mb-4 text-lg">"Designed for traders of today, just like you."</p>
          <form className="flex items-center justify-center md:justify-end">
            <input
              type="email"
              placeholder="What’s your work email?"
              className="px-4 py-2 bg-gray-900 border border-gray-600 rounded-l-full focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-r-full bg-primary hover:bg-primary-dark focus:outline-none"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
