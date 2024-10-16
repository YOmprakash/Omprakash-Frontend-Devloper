
import Telegram from '../assets/telegram.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import Facebook from '../assets/Facebook.png';
import Discord from '../assets/discord.png';

import Logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="py-8 md:px-12 text-white bg-[#001117] rounded-lg ">
    
      <div className="container flex flex-col items-center justify-center px-4 mx-auto md:justify-between md:flex-row">
        
        {/* Left Side: Logo and Social Icons */}
        <div className="flex flex-col items-center justify-center mb-4 md:items-start md:mb-0">
          <div className="flex items-center mb-6 md:mr-6">
            <img src={Logo} alt="EthAi Logo" className="w-10" />
            <p className='ml-2 text-4xl font-bold'>EthAi</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://telegram.com" className="hover:text-gray-400">
            <img src={Telegram} alt='telegram' className='w-[34px] h-[34px]' />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
            <img src={Instagram} alt='telegram' className='w-[34px] h-[34px]' />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-400">
            <img src={Twitter} alt='telegram' className='w-[34px] h-[34px]' />
            </a>
            <a href="https://facebook.com" className="hover:text-gray-400">
            <img src={Facebook} alt='telegram' className='w-[34px] h-[34px]' />
            </a>
            <a href="https://discord.com" className="hover:text-gray-400">
            <img src={Discord} alt='telegram' className='w-[34px] h-[34px]' />
            </a>
          </div>
        </div>
        
        {/* Right Side: Quote and Email Input */}
        <div className="hidden text-left md:block">
          <p className="mb-4 leading-[40px] font-semibold text-3xl md:max-w-[400px]">"Designed for traders of today, just like you."</p>
          <form className="flex items-center justify-start">
            <div className='bg-transparent  border-[#FBFAF2] border rounded-lg focus:outline-none'>
            <input
              type="email"
              placeholder="What’s your work email?"
              className="px-4 py-2 bg-transparent text-[#EFEFE8]"
              
            />
            <button
              type="submit"
              className="px-4 py-1 my-1 mr-1 text-white border border-[#8BF9E8] rounded-lg bg-primary hover:bg-primary-dark focus:outline-none"
            >
              Get Started
            </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
