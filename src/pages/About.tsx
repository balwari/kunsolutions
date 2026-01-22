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

const About = () => {
    const features = [
        {
            icon: Lightbulb,
            title: "Innovative Solutions",
            description:
                "We craft smart, scalable IT solutions tailored to meet your unique business needs, promoting long-term success.",
        },
        {
            icon: Settings,
            title: "Seamless Implementation",
            description:
                "Flawless integration with your existing systems to ensure productivity never stops during the transformation.",
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description:
                "Our dedicated team is available around the clock to provide quick resolution and personalized technical assistance.",
        },
        {
            icon: ShieldCheck,
            title: "Reliable Security",
            description:
                "We prioritize your data safety with enterprise-grade security protocols and compliance standards.",
        },
        {
            icon: Rocket,
            title: "Fast Delivery",
            description:
                "Speed without compromise — we follow agile methodologies to get your solutions up and running quickly.",
        },
        {
            icon: Users,
            title: "Client-Centric Approach",
            description:
                "We listen, adapt, and deliver — building strong relationships with our clients through transparency and trust.",
        },
    ];

    return (
        <>
            <div
                className="min-h-screen relative"
                style={{
                    backgroundImage: `url(${heroBg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Transparent green overlay */}
                <div className="absolute inset-0 bg-green-900/50 mix-blend-multiply"></div>

                {/* Additional gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-transparent to-green-900/40"></div>

                <Header />

                {/* Content */}
                <div className="relative z-10">
                    {/* About Section */}
                    <section
                        id="about"
                        className="relative py-24 bg-gradient-to-br overflow-hidden"
                    >
                        <div className="relative z-10 container mx-auto px-4">
                            <motion.div
                                className="text-center mb-16"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <section className="text-white py-16 px-6 md:px-10 lg:px-20">
                                    <div className="max-w-6xl mx-auto space-y-16">
                                        {/* Why Choose Section */}
                                        <div className="text-center space-y-6">
                                            <h2 className="text-4xl font-didot drop-shadow-lg">
                                                Why Choose{" "}
                                                <span className="font-allura text-5xl">
                                                    Kun{" "}
                                                    <span className="font-didot text-3xl">
                                                        SOLUTIONS
                                                    </span>
                                                </span>{" "}
                                                ?
                                            </h2>
                                            <p className="text-lg max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                                                Complex concepts often need simple keys. In a
                                                technologically powered world, making sense of
                                                complexities and delivering value by slicing Gordian
                                                knots gives businesses their cutting edge.
                                                <br />
                                                <br />
                                                Perceptive engagement, accelerated decision-making,
                                                and prolific innovation are the lifelines to success
                                                and lasting customer trust.
                                                <br />
                                                <br />
                                                This is where we come in.{" "}
                                                <strong>Kun Solutions</strong> is a customer-centric
                                                technology firm offering key services in cloud
                                                solutions and analytics, mobile and web technology,
                                                and ERP systems.
                                                <br />
                                                <br />
                                                We thrive in an environment of open collaboration,
                                                partnering with businesses to build complete
                                                ecosystems of connected experiences. Our creative
                                                minds and technical skills are the engines that help
                                                us uncover both your stated and unstated needs —
                                                delivering agile, functional, and aesthetic
                                                solutions.
                                                <br />
                                                <br />
                                                Welcome to a world where ethics meet excellence, and
                                                vertical experience embraces horizontal innovation.{" "}
                                                <strong>Welcome to Kun Solutions.</strong>
                                            </p>
                                        </div>

                                        {/* Vision & Mission Section */}
                                        <div className="bg-white text-gray-800 p-10 rounded-2xl shadow-lg space-y-12">
                                            <h2 className="text-4xl font-bold text-center text-green-900">
                                                <span className="font-allura text-6xl">Kun</span>'s
                                                Vision & Mission
                                            </h2>

                                            {/* Vision */}
                                            <div className="bg-green-50 p-6 rounded-2xl shadow-md">
                                                <h3 className="text-2xl font-semibold text-green-900 mb-2">
                                                    Vision
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed">
                                                    Our vision is to guide businesses to grow through
                                                    value-added services and prompt innovative
                                                    solutions.
                                                </p>
                                            </div>

                                            {/* Mission */}
                                            <div className="bg-green-50 p-6 rounded-2xl shadow-md">
                                                <h3 className="text-2xl font-semibold text-green-900 mb-2">
                                                    Mission
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed">
                                                    Our mission is to incorporate new techniques and
                                                    expertise with creativity through modern standards
                                                    of technology.
                                                </p>
                                            </div>

                                            {/* Who We Are */}
                                            <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
                                                <h3 className="text-3xl font-semibold text-green-900 mb-4">
                                                    Who We Are
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed mb-6">
                                                    KUN Solutions is here to help you achieve your
                                                    business goals.
                                                </p>

                                                <ul className="space-y-6">
                                                    <li>
                                                        <h4 className="text-xl font-medium text-green-900">
                                                            1. Comprehensive
                                                        </h4>
                                                        <p className="text-gray-700">
                                                            Get real-time insights with our intuitive
                                                            dashboard, designed to help you make informed
                                                            decisions that drive business growth.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4 className="text-xl font-medium text-green-900">
                                                            2. Optimization
                                                        </h4>
                                                        <p className="text-gray-700">
                                                            Leverage advanced research optimization tools
                                                            to enhance your business strategies and stay
                                                            ahead of the competition.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4 className="text-xl font-medium text-green-900">
                                                            3. Save Time + Money
                                                        </h4>
                                                        <p className="text-gray-700">
                                                            Optimize your processes to save valuable time
                                                            and resources, allowing you to focus on what
                                                            truly matters – growing your business.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4 className="text-xl font-medium text-green-900">
                                                            4. Monitoring
                                                        </h4>
                                                        <p className="text-gray-700">
                                                            Stay on top of your game with our monitoring
                                                            tools, ensuring your business remains
                                                            competitive and visible.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </motion.div>

                            {/* Feature Cards */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition duration-300 group"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
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

                    <div className="bg-black/20 backdrop-blur-md">
                        <ContactSection />
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
