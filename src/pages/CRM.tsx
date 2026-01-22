import {
  Lightbulb,
  Settings,
  Headphones,
  ShieldCheck,
  Rocket,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg2 from "@/assets/hero-bg-2.jpg";

const CRM = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Intelligent Automation",
      description:
        "Automate repetitive tasks, manage pipelines efficiently, and improve customer satisfaction through smart workflows.",
    },
    {
      icon: Settings,
      title: "Customizable Dashboards",
      description:
        "Tailor dashboards for sales, support, or marketing teams to keep everyone aligned and goal-driven.",
    },
    {
      icon: Headphones,
      title: "360° Customer Support",
      description:
        "Maintain strong relationships with built-in support tools including chat, tickets, and feedback channels.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Customer Data",
      description:
        "Ensure data security and privacy with role-based access, encryption, and compliance support.",
    },
    {
      icon: Rocket,
      title: "Sales Acceleration",
      description:
        "Track leads, automate follow-ups, and boost conversions with built-in AI recommendations and reporting.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Unify your teams with collaborative tools and activity logs — ensuring nothing falls through the cracks.",
    },
  ];

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
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/40 z-0"></div>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-10">
        <section
          id="crm"
          className="relative py-24 text-white overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-extrabold mb-4 drop-shadow-md">
                Empower Your Sales with CRM Solutions
              </h2>
              <p className="text-lg max-w-2xl mx-auto drop-shadow-sm">
                Unlock the full potential of your customer relationships with
                our scalable, AI-powered CRM systems — tailored for efficiency,
                growth, and satisfaction.
              </p>

              {/* Call to action */}
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 inline-block px-6 py-3 bg-[#ff6a00] hover:bg-[#e65c00] text-white font-medium rounded-lg transition"
              >
                Get a Free Consultation
              </button>
            </motion.div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-gray-800 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-[#ff6a00]/10 transition">
                    <feature.icon className="h-10 w-10 text-[#ff6a00] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
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

        {/* Contact */}
        <div className="bg-black/20 backdrop-blur-md">
          <ContactSection />
        </div>

        {/* Footer */}
        <div className="bg-white/95 backdrop-blur-sm">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CRM;
