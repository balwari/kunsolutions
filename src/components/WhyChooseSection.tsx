import { Lightbulb, Settings, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lightbulb,
    title: "Solution",
    description:
      "Innovative, custom-tailored solutions designed to meet your unique business requirements and drive growth.",
  },
  {
    icon: Settings,
    title: "Implementation",
    description:
      "Seamless deployment and integration with minimal disruption to your existing operations and workflows.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Round-the-clock technical assistance and ongoing support to ensure optimal system performance.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            <span className="font-didot text-4xl mr-1">Why Choose  </span><span className="text-5xl font-allura"> Kun <span className="font-didot text-3xl">SOLUTIONS</span> ?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
            With decades of experience and a commitment to excellence, we deliver solutions that
            not only meet your current needs but also scale with your future growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mx-auto w-20 h-20 bg-gradient-to-br from-green-700 to-green-500 text-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <feature.icon className="h-10 w-10" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className=" text-gray-600 leading-relaxed max-w-sm mx-auto">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
