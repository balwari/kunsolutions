import {
    Layers,
    Wrench,
    UserCheck,
    BadgeCheck,
    Activity,
    Palette,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg3 from "@/assets/hero-bg-2.jpg";

const BespokeApps = () => {
    const features = [
        {
            icon: Layers,
            title: "Tailored Architecture",
            description:
                "We build applications from the ground up to perfectly fit your business logic, processes, and integration needs.",
        },
        {
            icon: Wrench,
            title: "Full Customization",
            description:
                "From UI to core functionality — everything is built to your exact specifications without compromise.",
        },
        {
            icon: UserCheck,
            title: "User-Centric Design",
            description:
                "Our apps are designed for your users — intuitive, engaging, and highly functional across all platforms.",
        },
        {
            icon: BadgeCheck,
            title: "Quality & Reliability",
            description:
                "We rigorously test and validate every feature to ensure high availability, zero downtime, and smooth user experience.",
        },
        {
            icon: Activity,
            title: "Business Automation",
            description:
                "Automate manual workflows and streamline operations through intelligent process integrations.",
        },
        {
            icon: Palette,
            title: "Unique Brand Identity",
            description:
                "We make your app visually reflect your brand with custom UI components and animations.",
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
                backgroundImage: `url(${heroBg3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Transparent green overlay */}
            <div className="absolute inset-0 bg-green-900/60" />
            {/* Optional gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-transparent to-green-900/40" />

            <Header />

            <div className="relative z-10">
                <section
                    id="bespoke-applications"
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
                                Bespoke App Development
                            </h2>
                            <div className="text-lg text-white max-w-4xl mx-auto drop-shadow-md leading-relaxed space-y-4 text-center sm:text-left">
                                <p>
                                    <span className="text-white font-semibold">Tailored Solutions, Limitless Possibilities</span><br />
                                    At <span className="font-allura text-3xl"> Kun <span className="font-didot text-[17px]">SOLUTIONS</span>, </span> we don’t just build apps — we craft unique digital experiences designed specifically around your business goals, user needs, and long-term vision.
                                </p>

                                <p>
                                    <span className="font-semibold text-white">Bespoke App Development</span> means more than custom code. It’s about understanding your process and workflow, anticipating challenges, and delivering a solution that integrates seamlessly with your business operations.
                                </p>

                                <p className="italic text-gray-300">
                                    Whether you're starting from scratch or looking to optimize an existing system, our bespoke approach ensures precision, efficiency, and scalability.
                                </p>

                                <p>
                                    <span className="font-semibold">What Sets Us Apart:</span>
                                </p>
                                <ul className="list-disc list-inside text-white space-y-1 text-left sm:ml-6">
                                    <li>Consultation-driven development tailored to your business</li>
                                    <li>Flexible architecture designed for future growth</li>
                                    <li>Integration with existing platforms and third-party systems</li>
                                    <li>Dedicated teams with full-stack development expertise</li>
                                </ul>

                                <p>
                                    With a user-first mindset and technology at our core, <span className="font-semibold text-white font-allura text-2xl"> Kun <span className="font-didot text-2xl">SOLUTIONS</span> </span> transforms complex ideas into powerful, intuitive applications built to perform and evolve.
                                </p>
                            </div>

                            <button
                                onClick={scrollToContact}
                                className="mt-4 bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:scale-105"
                            >
                                Start Your Custom App
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

export default BespokeApps;
