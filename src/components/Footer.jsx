import { FaCopyright } from "react-icons/fa"; // Import the copyright icon from react-icons

const Footer = () => {
  return (
    <>
      <div className="flex justify-end bg-white text-sky-500 shadow-custom-top bottom-0 fixed w-full z-50 h-10 sm:h-12">
        {/* Left Section: Logo or branding */}
        <div className="flex items-center text-lg sm:text-xl font-bold italic mx-4 sm:mx-6">
          <FaCopyright className="self-center" />
          <span className="ml-2">2024 Syaloni Barman</span>
        </div>
      </div>
    </>
  );
};

export default Footer;