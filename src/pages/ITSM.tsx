import {
  LifeBuoy,
  ClipboardList,
  ShieldCheck,
  Users2,
  Timer,
  Settings
} from "lucide-react";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg2 from "@/assets/hero-bg-2.jpg";

const ITSM = () => {
  const itsmFeatures = [
    {
      icon: ClipboardList,
      title: "Service Request Management",
      description:
        "Streamline service requests with automated workflows and track resolution status in real-time.",
    },
    {
      icon: LifeBuoy,
      title: "Incident & Problem Management",
      description:
        "Minimize downtime with structured response processes, root-cause analysis, and ticket lifecycle tracking.",
    },
    {
      icon: Timer,
      title: "SLA Monitoring",
      description:
        "Ensure service quality with customizable SLAs, real-time alerts, and automated escalation.",
    },
    {
      icon: Settings,
      title: "Change & Configuration Management",
      description:
        "Maintain control with structured change approvals and configuration tracking for IT assets.",
    },
    {
      icon: Users2,
      title: "IT Asset Management",
      description:
        "Track hardware, software, and licenses across your organization from a single pane of glass.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description:
        "Enforce security best practices and remain audit-ready with access logs, role-based control, and reports.",
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/30" />

      <Header />

      <div className="relative z-10">
        <section
          id="itsm"
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
              <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
                Modern ITSM Solutions for Agile Enterprises
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-md mb-6">
                Kun Solutions delivers intelligent ITSM systems to improve
                service delivery, automate processes, and boost IT productivity.
              </p>

              <button
                onClick={scrollToContact}
                className="mt-4 bg-orange-accent text-white px-6 py-3 rounded-lg hover:bg-orange-accent/90 transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:scale-105"
              >
                Let's Talk ITSM
              </button>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
              {itsmFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition">
                    <feature.icon className="h-10 w-10 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
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

export default ITSM;
