import {
    BarChart2,
    Search,
    Users,
    Megaphone,
    Mail,
    Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg4 from "@/assets/hero-bg-2.jpg"; // Use a marketing-relevant background

const DigitalMarketing = () => {
    const features = [
        {
            icon: Search,
            title: "SEO Optimization",
            description:
                "Boost your organic rankings and visibility with proven SEO strategies tailored to your business niche.",
        },
        {
            icon: Megaphone,
            title: "Social Media Campaigns",
            description:
                "Drive engagement and brand awareness across Facebook, Instagram, LinkedIn, and more with creative content and paid ads.",
        },
        {
            icon: Mail,
            title: "Email Marketing",
            description:
                "Convert leads and retain customers with highly targeted and personalized email campaigns that perform.",
        },
        {
            icon: Globe,
            title: "Content Marketing",
            description:
                "We craft engaging blogs, infographics, and content that educates, converts, and improves SEO performance.",
        },
        {
            icon: Users,
            title: "Lead Generation",
            description:
                "Generate qualified leads using a mix of inbound marketing, landing pages, and performance-driven funnels.",
        },
        {
            icon: BarChart2,
            title: "Analytics & Reporting",
            description:
                "We track everything — from clicks to conversions — to continuously optimize your marketing ROI.",
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
                backgroundImage: `url(${heroBg4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Transparent green overlay */}
            <div className="absolute inset-0 bg-green-900/60" />
            {/* Soft green gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-transparent to-green-900/50" />

            <Header />

            <div className="relative z-10">
                <section
                    id="digital-marketing"
                    className="relative py-24 overflow-hidden"
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
                                Digital Marketing Services
                            </h2>
                            <div className="text-lg text-white max-w-4xl mx-auto drop-shadow-md leading-relaxed space-y-4 text-center sm:text-left">
                                <p>
                                    <span className="text-white font-semibold">Fuel Your Brand's Growth</span><br />
                                    At <span className="font-allura text-3xl"> Kun <span className="font-didot text-[18px]">SOLUTIONS</span>, </span>we turn clicks into customers with data-driven digital marketing strategies that grow your visibility, traffic, and revenue.
                                </p>

                                <p>
                                    Our <span className="font-semibold text-white">Digital Marketing Services</span> are tailored to meet your business goals—whether it’s boosting brand awareness, generating leads, or driving conversions. From SEO to social media, we combine creativity with analytics to ensure every campaign delivers measurable results.
                                </p>

                                <p className="italic text-gray-300">
                                    No guesswork. Just real growth backed by smart strategy, compelling content, and continuous optimization.
                                </p>

                                <p>
                                    <span className="font-semibold">Our Expertise Includes:</span>
                                </p>

                                <ul className="list-disc list-inside text-white space-y-1 text-left sm:ml-6">
                                    <li>Search Engine Optimization (SEO)</li>
                                    <li>Google Ads & Pay-Per-Click (PPC)</li>
                                    <li>Social Media Marketing (Facebook, Instagram, LinkedIn)</li>
                                    <li>Email Marketing Campaigns</li>
                                    <li>Conversion Rate Optimization (CRO)</li>
                                    <li>Brand Strategy & Content Marketing</li>
                                </ul>

                                <p>
                                    With a keen eye on trends and a commitment to results, <span className="font-semibold text-white font-allura text-3xl">Kun <span className="font-didot text-2xl">SOLUTIONS</span></span> is your trusted partner in building a digital presence that works as hard as you do.
                                </p>
                            </div>

                            <button
                                onClick={scrollToContact}
                                className="mt-4 bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:scale-105"
                            >
                                Boost Your Business Now
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

export default DigitalMarketing;
