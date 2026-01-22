import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg2 from "@/assets/hero-bg-2.jpg";

const CookiePolicy = () => {
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
                    {/* Green transparent overlay for section */}
                    <div className="absolute inset-0 bg-green-900/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-transparent to-green-900/20"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Cookie Policy</h2>
                            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
                                Kun Solutions uses cookies to enhance your browsing experience and analyze site traffic.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white max-w-4xl mx-auto space-y-6 text-lg">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">1. What Are Cookies?</h3>
                                <p>
                                    Cookies are small text files placed on your device to help us recognize you and improve user experience.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">2. How We Use Cookies</h3>
                                <p>
                                    We use cookies to remember preferences, provide analytics, and support site functionality. They help us improve services and usability.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">3. Third-Party Cookies</h3>
                                <p>
                                    We may use third-party services like Google Analytics that set their own cookies to collect anonymous traffic data.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">4. Managing Cookies</h3>
                                <p>
                                    Most browsers allow you to control cookies via settings. You can block or delete them at any time, though this may affect site functionality.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">5. Changes to This Policy</h3>
                                <p>
                                    This Cookie Policy may be updated periodically. Please check this page to stay informed about any changes.
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

export default CookiePolicy;
