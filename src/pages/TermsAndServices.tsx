import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg2 from "@/assets/hero-bg-2.jpg";

const TermsAndServices = () => {
    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: `url(${heroBg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}
        >
            {/* Green transparent overlay */}
            <div className="absolute inset-0 bg-green-900/50"></div>

            {/* Green gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-transparent to-green-900/30"></div>

            <Header />

            <div className="relative z-10">
                <section
                    className="py-20 relative overflow-hidden"
                    style={{
                        backgroundImage: `url(${heroBg2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed"
                    }}
                >
                    {/* Green transparent overlay */}
                    <div className="absolute inset-0 bg-green-900/40"></div>

                    {/* Green gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-transparent to-green-900/20"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                                Terms & Services
                            </h2>
                            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
                                By accessing or using Kun Solutions’ services, you agree to the following terms and conditions.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white max-w-4xl mx-auto space-y-6 text-lg">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h3>
                                <p>
                                    By using our website or services, you agree to be bound by these terms. If you disagree, please refrain from using our services.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">2. Services</h3>
                                <p>
                                    Kun Solutions provides IT consulting, software development, and technology services. Service specifics are agreed upon via individual contracts.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">3. Intellectual Property</h3>
                                <p>
                                    All content, trademarks, and code are the property of Kun Solutions unless otherwise stated. Reproduction without permission is prohibited.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h3>
                                <p>
                                    Kun Solutions is not liable for any indirect or consequential damages arising from the use or inability to use our services.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">5. Termination</h3>
                                <p>
                                    We reserve the right to suspend or terminate access to services if terms are violated, without notice or liability.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">6. Governing Law</h3>
                                <p>
                                    These terms are governed by the laws of India. Any disputes will be settled in courts located in [Your City, e.g., Bengaluru].
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-green-900/20 backdrop-blur-md">
                    <ContactSection />
                </div>

                <div className="bg-white/95 backdrop-blur-sm">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default TermsAndServices;
