import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-section">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary mb-8">
              Let's Collaborate
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              We're always interested in new projects and partnerships. 
              Reach out to discuss your architectural needs.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="container mx-auto px-6 pb-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-3xl text-primary mb-8">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-medium text-primary mb-2">Studio</h3>
                    <address className="text-muted-foreground not-italic leading-relaxed">
                      BARCODE Architecture Studio<br />
                      [Street Address]<br />
                      Tangiers, Morocco<br />
                      [Postal Code]
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-primary mb-2">Contact</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>
                        <a 
                          href="mailto:info@barcode-architecture.com" 
                          className="hover:text-primary transition-colors"
                        >
                          info@barcode-architecture.com
                        </a>
                      </p>
                      <p>
                        <a 
                          href="tel:+212-xxx-xxx-xxx" 
                          className="hover:text-primary transition-colors"
                        >
                          +212 xxx xxx xxx
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-medium text-primary mb-2">Office Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 - 18:00</p>
                      <p>Saturday: 10:00 - 14:00</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary p-6 border border-border">
                <h3 className="font-heading font-medium text-primary mb-4">
                  Project Inquiries
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For new project discussions, please include details about your project scope, 
                  timeline, and location. We'll schedule a consultation to better understand 
                  your architectural needs.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 border border-border">
              <h2 className="font-heading font-bold text-2xl text-primary mb-8">
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" type="text" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" required />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                    Company / Organization
                  </label>
                  <Input id="company" type="text" />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-primary mb-2">
                    Project Type
                  </label>
                  <select 
                    id="projectType"
                    className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="cultural">Cultural</option>
                    <option value="public">Public Space</option>
                    <option value="restoration">Heritage/Restoration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Project Description *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your project, including scope, timeline, and any specific requirements..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;