import {
  Smartphone,
  LayoutDashboard,
  Cloud,
  Fingerprint,
  Activity,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg2 from "@/assets/hero-bg-2.jpg";

const MobileApps = () => {
  const features = [
    {
      icon: Smartphone,
      title: "iOS & Android Apps",
      description:
        "We build robust, scalable mobile apps for both iOS and Android platforms using React Native, Flutter, and native stacks.",
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX Excellence",
      description:
        "Our design-first approach ensures intuitive, beautiful interfaces that keep your users engaged and loyal.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Seamless backend integration with Firebase, AWS, or your custom APIs — enabling real-time data and analytics.",
    },
    {
      icon: Fingerprint,
      title: "Security-First Development",
      description:
        "Biometric authentication, end-to-end encryption, and secure storage for user trust and compliance.",
    },
    {
      icon: Activity,
      title: "Performance Optimization",
      description:
        "Fast loading, battery-efficient, and optimized apps even under heavy user loads and offline conditions.",
    },
    {
      icon: Users,
      title: "Scalable User Management",
      description:
        "From authentication to push notifications and user roles — we build for millions, not just MVPs.",
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
      {/* Green overlay (same as WebDesign) */}
      <div className="absolute inset-0 bg-green-900/60" />

      <Header />

      <div className="relative z-10">
        <section
          id="mobile-apps"
          className="relative py-24 bg-gradient-to-br overflow-hidden"
        >
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg text-center">
                Mobile App Development
              </h2>

              <div className="text-lg text-white max-w-4xl mx-auto drop-shadow-md leading-relaxed space-y-4 text-center sm:text-left">
                <p>
                  <strong className="text-white">
                    Native and Cross-Platform Excellence
                  </strong>
                  <br />
                  Our mobile development services are crafted to transform your
                  vision into high-performing mobile apps — faster and smarter.
                  Whether native or cross-platform, we ensure a seamless
                  experience across devices and platforms.
                </p>

                <p>
                  <span className="font-semibold text-white font-allura text-3xl">
                    Kun{" "}
                    <span className="font-didot text-[18px]">SOLUTIONS</span>
                  </span>{" "}
                  specializes in designing and deploying mobile apps with
                  exceptional UI/UX, robust backend architecture, and secure
                  code. Our solutions focus on performance, scalability, and
                  usability — helping your app thrive in a competitive
                  marketplace.
                </p>

                <p className="italic text-gray-300">
                  Your reliable software development partner.
                </p>

                <p>
                  <span className="font-semibold">Have a complex app idea?</span>
                  <br />
                  Need a strategic, tailor-made solution built just for your
                  business?
                </p>

                <p className="font-semibold text-white">
                  Platforms We Excel In:
                </p>
                <ul className="list-disc list-inside text-white space-y-1 text-left sm:ml-6">
                  <li>
                    <span className="text-white font-semibold">iOS</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">Android</span>
                  </li>
                </ul>

                <p>
                  From{" "}
                  <span className="font-semibold text-white">
                    custom mobile applications
                  </span>{" "}
                  to robust cross-platform solutions and high-performance native
                  apps — our developers ensure your project is delivered with
                  precision, scalability, and a human-centered design approach.
                </p>
              </div>

              <button
                onClick={scrollToContact}
                className="mt-4 bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:scale-105"
              >
                Build Your App Now
              </button>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-900 flex items-center justify-center mb-6 group-hover:bg-green-500 transition">
                    <feature.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
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

export default MobileApps;
