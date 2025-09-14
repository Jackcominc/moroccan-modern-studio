import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h1 className="font-heading font-light text-6xl text-primary tracking-wide">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-secondary py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Tangiers, Morocco<br />
                <a 
                  href="mailto:info@barcode-architecture.com" 
                  className="hover:text-primary transition-colors"
                >
                  info@barcode-architecture.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-lg mx-auto">
          <form className="space-y-8">
            <div>
              <Input placeholder="Name" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Textarea placeholder="Message" className="min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;