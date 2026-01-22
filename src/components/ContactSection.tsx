import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import 'flag-icons/css/flag-icons.min.css';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-green-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 h-32 w-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 right-32 h-48 w-48 border border-orange-accent/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 h-24 w-24 border border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch!</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Ready to transform your IT operations? Contact us today for a free consultation
            and discover how our solutions can benefit your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
            <form className="space-y-6">
              <Input
                placeholder="Name"
                type="text"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
              />
              <Input
                placeholder="Email Address"
                type="email"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
              />
              <Textarea
                placeholder="Tell us about your project requirements..."
                rows={5}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 resize-none"
              />
              <Button variant="hero" size="lg" className="w-full bg-white text-green-900 hover:bg-green-900 hover:text-white">
                Send Message
                <MessageCircle className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Call Us</p>
                    <p className="text-xl">+91 8807775448 (India)</p>
                    <p className="text-xl">+91 6374268300 (India)</p>
                    <p className="text-xl">+973 3348 9231 (Bahrain)</p>

                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-xl">sales@kunsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-900" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Locations</p>
                    <p className="text-xl">
                      <span className="fi fi-in"></span> India   <br />
                      <span className="fi fi-bh"></span> Bahrain  <br />
                      <span className="fi fi-ae"></span> Dubai
                      (Coming Soon)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-blue-100">
                <div className="flex justify-between">
                  <span>Bahrain</span>
                  <span>Sunday - Thursday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>India</span>
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="text-3xl">India</div>
        <div className="mt-7 grid grid-cols-1 gap-8">
          {/* India Map */}
          <div className="w-full h-64">
            <iframe
              title="India Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.341715736231!2d80.14528437507767!3d12.987864087337038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ff944b2f6f3%3A0x3b6d0f2d9a7459f1!2s6%2F35%2C%20Gandhi%20St%2C%20Anna%20Nagar%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043!5e0!3m2!1sen!2sin!4v1691838974000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Bahrain Map */}
          <div className="text-3xl">Bahrain</div>
          <div className="w-full h-64">
            <iframe
              title="Bahrain Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0850647424544!2d50.55501657503386!3d26.236005277047675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afab1722d6f1%3A0x9dcb3a8d948e6a8d!2sBuilding%20No.%20284%2C%20Road%20307%2C%20Block%20303%2C%20Al%20Naim%2C%20Bahrain!5e0!3m2!1sen!2sin!4v1691839012345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section >
  );
};

export default ContactSection;
