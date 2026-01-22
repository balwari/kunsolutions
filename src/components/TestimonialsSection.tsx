import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-orange-accent fill-current" />
            ))}
          </div>
        </div>

        <Card className="max-w-4xl mx-auto p-8 bg-section-bg border-0 shadow-elegant">
          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
              "Kun Solutions has been our trusted IT partner for over 5 years. Their implementation 
              transformed our service delivery, reducing our incident resolution time by 60% and significantly improving 
              customer satisfaction. Their team's expertise and dedication to our success has been exceptional."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-12 w-12 bg-orange-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JD</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">John Doe</h4>
                <p className="text-gray-600">IT Director, Tech Solutions Inc.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;