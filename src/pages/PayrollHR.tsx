import {
  Banknote,
  CalendarCheck2,
  Users,
  ShieldCheck,
  FileText,
  UserCheck
} from "lucide-react";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg2 from "@/assets/hero-bg-2.jpg";

const PayrollHR = () => {
  const features = [
    {
      icon: Banknote,
      title: "Automated Payroll",
      description:
        "Accurate, on-time salary processing with tax calculations, payslip generation, and compliance built in.",
    },
    {
      icon: CalendarCheck2,
      title: "Leave & Attendance",
      description:
        "Track employee attendance, leaves, holidays, and manage approvals with real-time syncing.",
    },
    {
      icon: Users,
      title: "Employee Self-Service",
      description:
        "Empower employees with secure access to payslips, leave requests, and personal data updates.",
    },
    {
      icon: ShieldCheck,
      title: "Statutory Compliance",
      description:
        "PF, ESI, TDS, and other regulatory reports auto-generated and compliant with Indian labor laws.",
    },
    {
      icon: FileText,
      title: "Document Management",
      description:
        "Centralized storage for offer letters, ID proofs, contracts, and all HR-related documents.",
    },
    {
      icon: UserCheck,
      title: "Recruitment & Onboarding",
      description:
        "Streamlined hiring process with job posting, applicant tracking, and seamless onboarding workflows.",
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
          id="payroll-hr"
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
                Streamlined Payroll & HR for Modern Businesses
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-md mb-6">
                Kun Solutions delivers robust payroll and HR software that simplifies
                compliance, enhances employee engagement, and automates core operations.
              </p>

              <button
                onClick={scrollToContact}
                className="mt-4 bg-orange-accent text-white px-6 py-3 rounded-lg hover:bg-orange-accent/90 transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:scale-105"
              >
                Let’s Talk HR Tech
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

export default PayrollHR;
