import { Card } from "@/components/ui/card";
import {
  LayoutDashboard,
  Smartphone,
  Braces,
  LineChart,
  Megaphone,
  ShoppingCart
} from "lucide-react";
import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: LayoutDashboard,
      title: "Web Design & Development",
      link: "/services/website-design-and-development",
      description:
        "Custom websites and web platforms tailored to your business goals, built with performance and scalability in mind.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      link: "/services/mobile-app-development",
      description:
        "Native and cross-platform mobile apps designed for smooth performance, user-friendly interfaces, and real-world impact.",
    },
    {
      icon: Braces,
      title: "Bespoke Apps",
      link: "/services/web-app-bespoke-app",
      description:
        "Tailor-made software solutions developed to meet your unique workflow, functionality, and growth requirements.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      link: "/services/ecommerce",
      description:
        "End-to-end e-commerce solutions with custom store design, secure payments, and scalable infrastructure to grow your online business.",
    },
    {
      icon: LineChart,
      title: "Digital Marketing",
      link: "/services/erp",
      description:
        "SEO, social media, content, and campaigns — all driven by data, crafted to boost your online visibility and engagement.",
    },
    {
      icon: Megaphone,
      title: "Advertising",
      link: "/services/advertising",
      description:
        "High-impact digital and traditional advertising strategies to increase reach, generate leads, and amplify your brand.",
    },
  ];
  

  return (
    <section id="services" className="py-20 bg-section-bg overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-white to-blue-50 opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-green-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We are a Web Designing company that discovers key solutions that support businesses in achieving
            their goals.
Kun Solutions offers comprehensive IT solutions tailored to drive growth, streamline operations, and deliver exceptional customer experiences. From enterprise software and cloud-native applications to mobile and e-commerce platforms, we provide end-to-end digital solutions.
          </motion.p>

        </div>

        <motion.div
          ref={scrollRef}
          className="min-h-[450px] flex gap-6 overflow-x-auto no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Marquee pauseOnHover speed={90} gradient={false}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="inline-block min-w-[340px] max-w-[400px] mx-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white text-center min-h-[320px] p-8 rounded-2xl shadow-md border-t-4 border-green-800 relative cursor-pointer transition-colors duration-300"
                  whileHover={{ backgroundColor: "#fff7ed" }}
                  onClick={() => {
                    navigate(service.link);
                    window.scrollTo(0, 0);
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / 20).toFixed(2);
                    const rotateY = ((x - centerX) / 20).toFixed(2);
                    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
                  }}
                >
                  <motion.div
                    className="mx-auto w-16 h-16 bg-gradient-to-tr from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 text-sm leading-relaxed line-clamp-5 max-w-xs mx-auto">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}

          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
