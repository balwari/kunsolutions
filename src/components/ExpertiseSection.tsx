import { Building2, Home, Factory, ShoppingCart, Truck, Car, PenTool, Shield, Hospital } from "lucide-react";
import industryBg from "@/assets/industry-bg.jpg";
import { useNavigate } from "react-router-dom";

const ExpertiseSection = () => {
  const navigate = useNavigate();

  const industries = [
    { icon: Home, label: "Real Estate", path: "/expertise" },
    { icon: Factory, label: "Manufacturing", path: "/expertise" },
    { icon: ShoppingCart, label: "Retail", path: "/expertise" },
    { icon: Truck, label: "Trading & Distribution", path: "/expertise" },
    { icon: Car, label: "Automotive", path: "/expertise" },
    { icon: PenTool, label: "Creative", path: "/expertise" },
    { icon: Shield, label: "Security", path: "/expertise" },
    { icon: Hospital, label: "Health Care", path: "/expertise" },
  ];

  return (
    <section
      id="expertise"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${industryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Transparent green overlay */}
      <div className="absolute inset-0 bg-green-900/50 mix-blend-multiply"></div>

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-transparent to-green-900/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Industry Expertise
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Our experience spans across diverse industries, giving us deep insights into sector-specific
            challenges and requirements. We leverage this expertise to deliver tailored solutions that
            drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              onClick={() => {
                navigate(industry.path);
                window.scrollTo(0, 0);
              }}
              key={index}
              className="group flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4 p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-green-900 group-hover:text-white transition-all duration-300 shadow-lg">
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              <span className="text-white font-medium text-center drop-shadow-md">
                {industry.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md mx-auto">
            <p className="text-white/90 mb-8 drop-shadow-md">
              Ready to transform your business with our expertise?
            </p>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-green-900 px-8 py-3 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
