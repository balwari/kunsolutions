import {
    LayoutDashboard,
    Palette,
    Code,
    Smartphone,
    TimerReset,
    PenTool,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg6 from "@/assets/hero-bg-2.jpg"; // Use a modern design/dev-themed background

const WebDesign = () => {
    const features = [
        {
            icon: LayoutDashboard,
            title: "Custom Web Design",
            description:
                "We craft unique, visually engaging websites tailored to your brand identity and business objectives.",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description:
                "User-centric interfaces designed for seamless navigation, usability, and visual appeal across all devices.",
        },
        {
            icon: Code,
            title: "Frontend Development",
            description:
                "Responsive, SEO-friendly, high-performance websites built with the latest technologies like React, Tailwind, and Next.js.",
        },
        {
            icon: Smartphone,
            title: "Mobile-First Approach",
            description:
                "We design with mobile in mind to ensure your users have an excellent experience on any screen size.",
        },
        {
            icon: PenTool,
            title: "Landing Pages",
            description:
                "Conversion-focused landing pages designed to generate leads, sales, and maximum engagement.",
        },
        {
            icon: TimerReset,
            title: "Fast Loading Speed",
            description:
                "Optimized assets, clean code, and best practices to ensure lightning-fast loading and smooth interaction.",
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
                backgroundImage: `url(${heroBg6})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Green overlay */}
            <div className="absolute inset-0 bg-green-900/60" />

            <Header />

            <div className="relative z-10">
                <section
                    id="webdesign"
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
                                Web Design & Development
                            </h2>

                            <div className="text-lg text-white max-w-4xl mx-auto drop-shadow-md leading-relaxed space-y-4 text-center sm:text-left">
                                <p>
                                    <strong className="text-white">Web Application Development</strong><br />
                                    Turn your web app ideas into reality with <span className="font-semibold text-white font-allura text-3xl"> Kun <span className="font-didot text-[17px]">SOLUTIONS</span>.</span> We offer custom development for corporate websites, customer-facing platforms, and dynamic web portals. From concept and planning to design, development, testing, and deployment — we handle the full cycle.
                                </p>

                                <p>
                                    Get a <span className="font-semibold text-white">secure, scalable, and tailored</span> web application that aligns with your business ambitions. We leverage full-stack technologies to deliver innovative solutions, backed by best-in-class practices.
                                </p>

                                <p className="italic text-gray-300">
                                    Your reliable software development partner.
                                </p>

                                <p>
                                    <span className="font-semibold">Need a custom-built solution?</span><br />
                                    Searching for a team with proven success in web application delivery? We've got you covered.
                                </p>

                                <ul className="list-disc list-inside text-white space-y-1 text-left sm:ml-6">
                                    <li><span className="text-white font-semibold">Consulting</span></li>
                                    <li><span className="text-white font-semibold">UI/UX Design</span></li>
                                    <li><span className="text-white font-semibold">Implementation & Deployment</span></li>
                                </ul>

                                <p>
                                    <span className="font-semibold text-white font-allura text-3xl">Kun <span className="font-didot text-[18px]">SOLUTIONS</span> </span> delivers web solutions tailored to your industry and business goals — helping you rise above the competition in today’s digital landscape.
                                </p>
                            </div>

                            <button
                                onClick={scrollToContact}
                                className="mt-4 bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:scale-105"
                            >
                                Let's Design Your Website
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

export default WebDesign;
