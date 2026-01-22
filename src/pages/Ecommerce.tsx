import {
    ShoppingCart,
    CreditCard,
    Package,
    Globe,
    BarChart,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBgEcom from "@/assets/hero-bg-2.jpg"; // Use a modern ecommerce-themed background

const Ecommerce = () => {
    const features = [
        {
            icon: ShoppingCart,
            title: "Custom Online Stores",
            description:
                "Fully tailored e-commerce platforms designed to reflect your brand, engage customers, and drive sales.",
        },
        {
            icon: CreditCard,
            title: "Secure Payment Integration",
            description:
                "Seamless checkout experiences with integration of leading payment gateways for smooth and secure transactions.",
        },
        {
            icon: Package,
            title: "Inventory & Order Management",
            description:
                "Robust backend solutions for real-time inventory tracking, automated order updates, and efficient fulfillment.",
        },
        {
            icon: Globe,
            title: "Global Reach",
            description:
                "Multi-currency, multi-language, and region-specific customizations to help you sell worldwide.",
        },
        {
            icon: BarChart,
            title: "Analytics & Reporting",
            description:
                "Insightful dashboards to track sales performance, customer behavior, and marketing ROI.",
        },
        {
            icon: ShieldCheck,
            title: "Security & Compliance",
            description:
                "End-to-end data protection, PCI-DSS compliance, and best practices to safeguard your business and customers.",
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
                backgroundImage: `url(${heroBgEcom})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Green transparent overlay */}
            <div className="absolute inset-0 bg-green-900/60" />
            {/* Optional gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-transparent to-green-900/40" />

            <Header />

            <div className="relative z-10">
                <section
                    id="ecommerce"
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
                                E-Commerce Development
                            </h2>

                            <div className="text-lg text-white max-w-4xl mx-auto drop-shadow-md leading-relaxed space-y-4 text-center sm:text-left">
                                <p>
                                    <strong className="text-white">
                                        End-to-End E-Commerce Solutions
                                    </strong>
                                    <br />
                                    From startups to established enterprises,{" "}
                                    <span className="font-semibold text-white font-allura text-3xl">
                                        Kun{" "}
                                        <span className="font-didot text-[18px]">SOLUTIONS</span>
                                    </span>{" "}
                                    builds e-commerce platforms that scale with your growth. We
                                    specialize in creating seamless online shopping experiences
                                    that convert visitors into loyal customers.
                                </p>

                                <p>
                                    Get a{" "}
                                    <span className="font-semibold text-white">
                                        fast, secure, and conversion-focused
                                    </span>{" "}
                                    store, powered by the latest technologies and optimized for
                                    every device.
                                </p>

                                <p className="italic text-gray-300">
                                    Your partner in building revenue-driving online stores.
                                </p>

                                <p>
                                    <span className="font-semibold">We cover it all:</span>
                                </p>

                                <ul className="list-disc list-inside text-white space-y-1 text-left sm:ml-6">
                                    <li>
                                        <span className="text-white font-semibold">
                                            Platform Selection & Setup
                                        </span>
                                    </li>
                                    <li>
                                        <span className="text-white font-semibold">
                                            Custom Store Design
                                        </span>
                                    </li>
                                    <li>
                                        <span className="text-white font-semibold">
                                            Marketing & SEO Optimization
                                        </span>
                                    </li>
                                </ul>

                                <p>
                                    <span className="font-semibold text-white font-allura text-3xl">
                                        Kun <span className="font-didot text-2xl">SOLUTIONS</span>
                                    </span>{" "}
                                    delivers e-commerce solutions that maximize sales and customer
                                    satisfaction while ensuring security and scalability.
                                </p>
                            </div>

                            <button
                                onClick={scrollToContact}
                                className="mt-4 bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:scale-105"
                            >
                                Build My Online Store
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

export default Ecommerce;
