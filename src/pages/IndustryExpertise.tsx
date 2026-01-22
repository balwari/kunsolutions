import {
  Building,
  Stethoscope,
  GraduationCap,
  Truck,
  ShoppingBag,
  Shield,
  Airplay,
  Hotel,
  Factory,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import { useNavigate } from "react-router-dom";

const IndustryExpertise = () => {
  const navigate = useNavigate();

  const industries = [
    {
      icon: Building,
      title: "Real Estate & Construction",
      description:
        "Manage property listings, automate workflows, and enable seamless customer engagement with tech-driven solutions.",
      path: "/expertise"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Wellness",
      description:
        "HIPAA-compliant apps, patient management systems, and telemedicine platforms to modernize healthcare delivery.",
      path: "/expertise"
    },
    {
      icon: GraduationCap,
      title: "Education & E-Learning",
      description:
        "Create engaging LMS platforms, virtual classrooms, and assessment tools for the modern education ecosystem.",
      path: "/expertise"
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description:
        "Optimize inventory, shipping, and vendor operations with integrated logistics and warehouse solutions.",
      path: "/expertise"
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-Commerce",
      description:
        "We develop scalable e-commerce portals, POS integrations, and AI-powered customer engagement platforms.",
      path: "/expertise"
    },
    {
      icon: Shield,
      title: "Government & Public Sector",
      description:
        "Deliver digital governance through citizen portals, case management, and secure government-grade systems.",
      path: "/expertise"
    },
    {
      icon: Airplay,
      title: "Technology & Startups",
      description:
        "From MVPs to scalable platforms, we partner with startups and tech innovators to build future-ready products.",
      path: "/expertise"
    },
    {
      icon: Hotel,
      title: "Hospitality & Travel",
      description:
        "Booking systems, customer portals, and smart hotel management apps tailored to delight modern travelers.",
      path: "/expertise"
    },
    {
      icon: Factory,
      title: "Manufacturing & Automation",
      description:
        "Empower your operations with IoT-based systems, production tracking, and workflow automation.",
      path: "/expertise"
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${heroBg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Green transparent overlay */}
      <div className="absolute inset-0 bg-green-900/60" />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-transparent to-green-900/40" />

      <Header />

      <div className="relative z-10">
        <section
          id="expertise"
          className="relative py-24 overflow-hidden"
        >
          <div className="relative z-10 container mx-auto px-4">
            {/* Section Heading */}
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
                Industry Expertise
              </h2>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Transforming Industries Through Technology
              </h3>
              <p className="text-white text-md leading-relaxed">
                At <span className="font-allura text-3xl">Kun <span className="font-didot text-[17px]">SOLUTIONS</span>, </span> we go beyond one-size-fits-all development.
                We work closely with stakeholders across sectors to deeply understand their operational needs and design bespoke digital ecosystems that optimize efficiency, unlock growth, and deliver measurable results.
                We tailor our digital solutions to fit the unique challenges and opportunities of every industry we serve.
              </p>
              <button
                onClick={scrollToContact}
                className="mt-2 bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:scale-105"
              >
                Let’s Talk Industry Solutions
              </button>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-900 flex items-center justify-center mb-4 group-hover:bg-green-500 transition">
                    <item.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div id="contact" className="bg-black/20 backdrop-blur-md">
          <ContactSection />
        </div>

        <div className="bg-white/95 backdrop-blur-sm">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
