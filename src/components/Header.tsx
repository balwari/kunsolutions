import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Website Design & Development", path: "/services/website-design-and-development" },
    { label: "Mobile App Development", path: "/services/mobile-app-development" },
    { label: "Web App / Bespoke App", path: "/services/web-app-bespoke-app" },
    { label: "Ecommerce", path: "/services/ecommerce" },
    { label: "Digital Marketing", path: "/services/digital-marketing" },
    { label: "Advertising", path: "/services/advertising" },
  ];

  return (
    <header className="relative z-[9999] font-medium">
      {/* Top Bar */}
      <div className="bg-green-900 text-white py-2 px-2">
        <div className="mx-auto flex justify-between items-center text-sm px-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="fi fi-in text-xl"></span> <span className="text-[12px]">+91 8807775448</span>
              <span className="fi fi-bh text-xl"></span> <span className="text-[12px]">+973 33489231</span>

            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>sales@kunsolutions.com</span>
            </div>
          </div>
          <span className="hidden md:block">Professional IT Solutions & Services</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-4 relative z-[9999]">
        <div className="container mx-auto flex justify-between items-center relative z-[9999]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-16" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 z-[9999]">
            <a onClick={() => navigate('/')} className="cursor-pointer text-gray-700 hover:text-green-900">Home</a>

            {/* Services Dropdown */}
            <div className="relative group z-[9999]">
              <span className="text-gray-700 cursor-pointer hover:text-green-900">Services</span>
              <div className="absolute left-0 top-[100%] w-48 bg-white border shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-[9999]">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="cursor-pointer px-4 py-2 hover:bg-green-100 transition text-gray-700 hover:text-green-900 z-[9999]"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <a onClick={() => navigate('/expertise')} className="cursor-pointer text-gray-700 hover:text-green-900">Expertise</a>
            <a onClick={() => navigate('/about')} className="cursor-pointer text-gray-700 hover:text-green-900">About</a>
            <a onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer text-gray-700 hover:text-green-900">Contact</a>

            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-800 hover:bg-green-600 text-white"
              size="sm"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <Button
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden bg-transparent hover:bg-[#ff6a00]/10 text-black p-2 rounded"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Mobile Drawer with Framer Motion */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-lg z-[9999] flex flex-col p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <img src={logo} alt="Logo" className="h-10" />
                  <X className="h-6 w-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
                </div>

                <a onClick={() => { navigate('/'); setMenuOpen(false); }} className="py-2 text-gray-700 hover:text-green-900">Home</a>

                {/* Services Collapsible */}
                <div className="w-full">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="py-2 w-full text-left text-gray-700 hover:text-green-900 focus:outline-none"
                  >
                    Services ▾
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 border-l pl-4">
                      {navItems.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            navigate(item.path);
                            setMenuOpen(false);
                          }}
                          className="py-1 cursor-pointer text-gray-700 hover:text-green-900"
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a onClick={() => { navigate('/expertise'); setMenuOpen(false); }} className="py-2 text-gray-700 hover:text-green-900">Expertise</a>
                <a onClick={() => { navigate('/about'); setMenuOpen(false); }} className="py-2 text-gray-700 hover:text-green-900">About</a>
                <a onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }} className="py-1 text-gray-700 hover:text-green-900">Contact</a>

                <Button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setMenuOpen(false);
                  }}
                  className="mt-4 bg-green-900 hover:bg-green-500 w-full"
                  size="sm"
                >
                  Get Quote
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
