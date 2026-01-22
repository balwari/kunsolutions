import {
    Megaphone,
    MonitorPlay,
    Newspaper,
    DollarSign,
    ThumbsUp,
    BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg5 from "@/assets/hero-bg-2.jpg"; // Background image

const Advertising = () => {
    const features = [
        {
            icon: Megaphone,
            title: "360° Ad Campaigns",
            description:
                "We strategize and execute multi-channel ad campaigns across social, search, video, and display for maximum reach and impact.",
        },
        {
            icon: MonitorPlay,
            title: "Video Ads & Commercials",
            description:
                "High-converting video ads crafted for YouTube, Instagram Reels, and OTT platforms to captivate your audience.",
        },
        {
            icon: Newspaper,
            title: "Print & Outdoor Advertising",
            description:
                "Billboards, newspapers, magazines — we help your brand stand out in traditional media with smart creative placement.",
        },
        {
            icon: DollarSign,
            title: "Paid Search (PPC)",
            description:
                "Laser-targeted Google Ads campaigns that bring instant traffic, sales, and measurable ROI for your business.",
        },
        {
            icon: ThumbsUp,
            title: "Social Media Ads",
            description:
                "Meta, LinkedIn, Snapchat, and more — we manage end-to-end ad creatives, targeting, and optimization for engagement and conversion.",
        },
        {
            icon: BarChart3,
            title: "Performance Tracking",
            description:
                "Advanced reporting and A/B testing to continuously improve ad creatives, targeting, and cost efficiency.",
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
                backgroundImage: `url(${heroBg5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Green transparent overlay */}
            <div className="absolute inset-0 bg-green-900/60" />
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-transparent to-green-900/50" />

            <Header />

            <div className="relative z-10">
                <section
                    id="advertising"
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
                                Advertising Services
                            </h2>
                            <div className="text-lg text-white max-w-4xl mx-auto drop-shadow-md leading-relaxed space-y-5 text-center sm:text-left">
                                <p>
                                    <span className="text-white font-semibold">Stand Out. Be Remembered.</span><br />
                                    At <span className="text-white font-semibold font-allura text-3xl"> Kun <span className="font-didot text-[18px]">SOLUTIONS</span></span>, we craft high-impact advertising campaigns designed to captivate, convert, and create lasting impressions. Whether it's digital, print, or outdoor — we help your brand rise above the noise.
                                </p>

                                <p>
                                    Our team blends strategy, creativity, and analytics to deliver advertising that not only looks good but performs even better. From scroll-stopping video ads to billboard-ready creative, every campaign is powered by your goals.
                                </p>

                                <p className="italic text-white">
                                    We don't just advertise — we build experiences that spark action.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 text-left sm:ml-6 text-white">
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">Our Advertising Capabilities:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>360° Brand Campaigns</li>
                                            <li>Social & Influencer Advertising</li>
                                            <li>Google Display & Video Ads</li>
                                            <li>Outdoor, Transit & Print Media</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-semibold mb-2">Why Brands Choose Us:</h4>
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>Creative-First Approach</li>
                                            <li>Data-Driven Targeting</li>
                                            <li>Real-Time Optimization</li>
                                            <li>Transparent Performance Reports</li>
                                        </ul>
                                    </div>
                                </div>

                                <p>
                                    <span className="text-white font-semibold font-allura text-2xl"> Kun <span className="font-didot text-[17px]">SOLUTIONS</span> </span> is your full-service advertising partner. Whether you're launching a new product or scaling an existing brand — we deliver advertising that inspires results.
                                </p>
                            </div>

                            <button
                                onClick={scrollToContact}
                                className="mt-4 bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:scale-105"
                            >
                                Start Advertising Now
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

export default Advertising;
