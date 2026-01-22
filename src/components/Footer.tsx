import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white text-green-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl font-bold font-allura">Kun <span className="font-didot text-xl">SOLUTIONS</span></span>
            </div>
            <p className="text-green-900 mb-4">
              At Kun Solutions, we specialize in crafting unforgettable digital experiences. As a leading web design company, we are committed to discovering innovative solutions that empower businesses to achieve their objectives.            </p>
            <div className="flex space-x-4">
              <div className="h-8 w-8 bg-green-900 text-white  rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              <div className="h-8 w-8 bg-green-900 text-white  rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <Twitter className="h-4 w-4" />
              </div>
              <div className="h-8 w-8 bg-green-900 text-white  rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
              <div className="h-8 w-8 bg-green-900 text-white  rounded-full flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-green-900">
              <li><a onClick={() => {
                navigate('/services/website-design-and-development');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="hover:text-green-500 transition-colors cursor-pointer">Web Design & Development</a></li>
              <li><a onClick={() => {
                navigate('/services/mobile-app-development');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="hover:text-green-500 transition-colors cursor-pointer">Mobile App Development</a></li>
              <li><a onClick={() => {
                navigate('/services/web-app-bespoke-app');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="hover:text-green-500 transition-colors cursor-pointer">Bespoke Apps</a></li>
              <li><a onClick={() => {
                navigate('/services/ecommerce');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="hover:text-green-500 transition-colors cursor-pointer">Ecommerce</a></li>
              <li><a onClick={() => {
                navigate('/services/digital-marketing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="hover:text-green-500 transition-colors cursor-pointer">Digital Marketing</a></li>
              <li><a onClick={() => {
                navigate('/services/advertising');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} className="hover:text-green-500 transition-colors cursor-pointer">Advertising</a></li>
            </ul >
          </div >

          {/* Quick Links */}
          < div >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-900">
              <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#expertise" className="hover:text-green-500 transition-colors">Expertise</a></li>
              <li><a href="#about" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div >

          {/* Contact Info */}
          < div >
            <h3 className="text-lg font-semibold mb-4">Addresses</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-green-900">
                <span className="fi fi-in text-5xl"></span>
                <span> 6/35, Gandhi st, Anna nagar, Pallavaram, Chennai,
                  Tamil Nadu - 600043, India.
                  Mob: +91 8807775448, +91 6374268300</span>
              </div>
              <div className="flex items-center gap-3 text-green-900">
                <span className="fi fi-bh text-5xl"></span>
                <span> No 1, Building No 284, Road 307, Block 303 ,Area Al Naim, Bahrain.
                  Mob: +973 33489231</span>
              </div>
            </div>
          </div >
        </div >

        {/* Bottom Bar */}
        < div className="border-t border-gray-800 pt-8" >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Kun Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a onClick={() => { navigate('/privacy-policy'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-green-500 text-sm transition-colors cursor-pointer">Privacy Policy</a>
              <a onClick={() => { navigate('/terms-and-services'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-green-500 text-sm transition-colors cursor-pointer">Terms of Service</a>
              <a onClick={() => { navigate('/cookie-policy'); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-green-500 text-sm transition-colors cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div >
      </div >
    </footer >
  );
};

export default Footer;