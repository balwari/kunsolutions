import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SlidingBackground from "./SlidingBackground";
import { useEffect, useState } from "react";

const taglines = [
  "Empowering innovation, enabling growth.",
  "Driving digital transformation with precision.",
  "Your trusted partner in IT evolution.",
];

const HeroSection = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SlidingBackground className="relative min-h-[90vh] flex items-center justify-center">
      <section id="home" className="w-full relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >
              <h1 className="text-8xl lg:text-8xl font-allura mb-2 leading-tight">
                Kun <span className="font-didot text-5xl tracking-[0.3em] uppercase">SOLUTIONS</span>
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-2 animate-bounce-once mb-3 text-5xl">
                <span className="text-xl font-semibold">Where Ethics Meet Standard</span>
              </div>

              <p className="text-lg mb-2 text-blue-100 max-w-lg mx-auto lg:mx-0">
                Smart IT Solutions. Real Business Results.
              </p>
              <p className="text-lg mb-6 text-blue-100 max-w-lg mx-auto lg:mx-0">
                Your Partner in End-to-End IT Solutions.
              </p>
              <motion.p
                key={taglineIndex}
                className="text-md italic text-white mb-10 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
              >
                {taglines[taglineIndex]}
              </motion.p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-green-900 hover:text-white flex items-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white/10 border border-white/30 text-white hover:bg-white hover:text-green-900 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Phone className="h-5 w-5" />
                <span className="text-xl font-semibold">+91 8807775448</span>
              </div>
            </motion.div>

            {/* Right Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative animate-float">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                  <h3 className="text-white text-xl font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    {["24/7 Technical Support", "Expert Consultation", "Rapid Implementation"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-white/90">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SlidingBackground>
  );
};

export default HeroSection;
