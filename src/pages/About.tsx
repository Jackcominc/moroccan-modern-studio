import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-section">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary mb-8">
              Our Vision
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              BARCODE is an innovative architecture studio based in Tangiers, Morocco. 
              We specialize in creating contemporary spaces that honor traditional craftsmanship 
              while embracing modern design principles.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-secondary py-section">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
                  Design Philosophy
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  We believe architecture should be a dialogue between past and present, 
                  creating spaces that are both timeless and contemporary. Our approach 
                  combines rigorous spatial analysis with a deep appreciation for local 
                  materials and construction techniques.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Each project begins with careful observation of site, climate, and cultural context, 
                  allowing us to develop design solutions that are both environmentally responsible 
                  and socially relevant.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-card p-6 border border-border">
                  <h3 className="font-heading font-medium text-primary mb-3">Contextual Design</h3>
                  <p className="text-muted-foreground text-sm">
                    Every project responds to its unique environmental and cultural setting.
                  </p>
                </div>
                <div className="bg-card p-6 border border-border">
                  <h3 className="font-heading font-medium text-primary mb-3">Sustainable Practice</h3>
                  <p className="text-muted-foreground text-sm">
                    We prioritize ecological responsibility in all design decisions.
                  </p>
                </div>
                <div className="bg-card p-6 border border-border">
                  <h3 className="font-heading font-medium text-primary mb-3">Material Honesty</h3>
                  <p className="text-muted-foreground text-sm">
                    Local materials and traditional techniques inform our contemporary approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-6 py-section">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-12 text-center">
            Founding Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 bg-architectural mx-auto mb-6 border border-border"></div>
              <h3 className="font-heading font-medium text-xl text-primary mb-2">
                [Partner Name]
              </h3>
              <p className="text-muted-foreground mb-4">Principal Architect</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Brief bio about architectural background, education, and design philosophy. 
                Experience in contemporary and traditional Moroccan architecture.]
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 bg-mediterranean mx-auto mb-6 border border-border"></div>
              <h3 className="font-heading font-medium text-xl text-primary mb-2">
                [Partner Name]
              </h3>
              <p className="text-muted-foreground mb-4">Design Director</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Brief bio about design background, specialization in urban planning 
                and sustainable architecture. International project experience.]
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="bg-secondary py-section">
          <div className="container mx-auto px-6">
            <h2 className="font-heading font-bold text-3xl text-primary mb-12 text-center">
              Recognition
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="font-heading font-medium text-primary mb-2">2024</h3>
                <p className="text-muted-foreground text-sm">
                  [Architectural Award Name]<br />
                  Project Recognition
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-medium text-primary mb-2">2023</h3>
                <p className="text-muted-foreground text-sm">
                  [Design Excellence Award]<br />
                  Sustainable Architecture
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-medium text-primary mb-2">2022</h3>
                <p className="text-muted-foreground text-sm">
                  [Regional Architecture Prize]<br />
                  Cultural Heritage Project
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;