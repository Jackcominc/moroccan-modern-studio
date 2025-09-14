import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-32">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <h1 className="font-heading font-light text-6xl text-primary tracking-wide">
              Studio
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Founded in 2018, BARCODE creates contemporary architecture that honors Moroccan traditions while embracing modern design principles.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-secondary py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="text-center space-y-6">
                <h3 className="font-heading font-light text-lg text-primary">Contextual Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Architecture that responds to its unique environmental and cultural setting.
                </p>
              </div>
              <div className="text-center space-y-6">
                <h3 className="font-heading font-light text-lg text-primary">Sustainable Practice</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ecological responsibility integrated into every design decision.
                </p>
              </div>
              <div className="text-center space-y-6">
                <h3 className="font-heading font-light text-lg text-primary">Cultural Continuity</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bridging traditional wisdom with contemporary innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Section */}
        <section className="container mx-auto px-6 py-32">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div className="w-12 h-px bg-primary mx-auto"></div>
            <p className="font-heading font-light text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Founded in Tangiers, Morocco — 2018
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;