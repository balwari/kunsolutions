import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroBg2 from "@/assets/hero-bg-2.jpg";

const PrivacyPolicy = () => {
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
            {/* Main green overlay */}
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
                    {/* Section-specific overlay */}
                    <div className="absolute inset-0 bg-green-900/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-transparent to-green-900/20"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Privacy Policy</h2>
                            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
                                At Kun Solutions, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your data.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-white max-w-4xl mx-auto space-y-6 text-lg">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">1. Information Collection</h3>
                                <p>
                                    We collect personal information you provide directly to us, such as name, email, phone number, and business details when you contact us or use our services.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h3>
                                <p>
                                    Your information helps us respond to inquiries, improve our services, send updates, and fulfill our contractual obligations.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">3. Sharing of Data</h3>
                                <p>
                                    We do not sell or rent your personal data. We may share it with trusted partners to provide services on our behalf, in compliance with this policy.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">4. Data Security</h3>
                                <p>
                                    We implement strict technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">5. Your Rights</h3>
                                <p>
                                    You can request access to, correction of, or deletion of your personal data. To exercise your rights, contact us at privacy@kunsolutions.com.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">6. Policy Updates</h3>
                                <p>
                                    We may update this policy periodically. Changes will be posted on this page with a revised “Last Updated” date.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">7. Contact</h3>
                                <p>
                                    For any privacy-related questions, email us at <a href="mailto:privacy@kunsolutions.com" className="text-white underline">privacy@kunsolutions.com</a>.
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

export default PrivacyPolicy;
