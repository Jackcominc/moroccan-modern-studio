import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";
import culturalCenterImage from "@/assets/cultural-center.jpg";
import coastalVillaImage from "@/assets/coastal-villa.jpg";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Tangiers Cultural Center",
      category: "Cultural",
      year: "2024",
      image: culturalCenterImage,
      description: "A contemporary cultural space that bridges traditional Moroccan architecture with modern design principles."
    },
    {
      id: 2,
      title: "Coastal Villa Asilah", 
      category: "Residential",
      year: "2022",
      image: coastalVillaImage,
      description: "Residential architecture that responds to coastal climate while maintaining privacy and connection to nature."
    },
    {
      id: 3,
      title: "Urban Plaza Rabat",
      category: "Public", 
      year: "2022",
      image: heroImage,
      description: "Public space design focused on community gathering and cultural exchange in urban environment."
    },
    {
      id: 4,
      title: "Desert Retreat",
      category: "Hospitality", 
      year: "2023",
      image: culturalCenterImage,
      description: "Sustainable architecture designed for desert climate with traditional materials and contemporary forms."
    },
    {
      id: 5,
      title: "Medina Workshop",
      category: "Commercial", 
      year: "2021",
      image: coastalVillaImage,
      description: "Adaptive reuse project transforming traditional medina structure into contemporary workspace."
    },
    {
      id: 6,
      title: "Atlas House",
      category: "Residential", 
      year: "2023",
      image: heroImage,
      description: "Mountain residence integrated into landscape with panoramic views and sustainable design features."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="w-full">
            <div 
              className="h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-32 left-6 right-6 text-white">
                <div className="container mx-auto">
                  <div className="max-w-2xl">
                    <h1 className="font-heading font-light text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight tracking-wide">
                      Contemporary<br />
                      Architecture<br />
                      Studio
                    </h1>
                    <p className="font-body text-sm tracking-wide text-white/80 leading-relaxed max-w-lg">
                      BARCODE creates innovative architectural solutions that honor Moroccan traditions 
                      while embracing contemporary design principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-heading font-light text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                Selected Projects
              </h2>
              <div className="w-12 h-px bg-primary mx-auto mb-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {projects.map((project) => (
                <article key={project.id} className="group cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading font-light text-sm text-primary tracking-wide">
                        {project.title}
                      </h3>
                      <span className="text-muted-foreground text-xs">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground text-xs tracking-wide uppercase mb-3">{project.category}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading font-light text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8">
                  Studio Philosophy
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <p className="font-body text-sm text-primary leading-relaxed">
                    Every project begins with careful observation of site, climate, and cultural context. 
                    We develop design solutions that are both environmentally responsible and socially relevant, 
                    creating spaces that serve communities while respecting their heritage.
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Our approach combines rigorous spatial analysis with deep appreciation for local materials 
                    and construction techniques, resulting in architecture that is both innovative and timeless.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-heading font-light text-sm text-primary mb-3 tracking-wide">Contextual Design</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Architecture that responds to its unique environmental and cultural setting.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-light text-sm text-primary mb-3 tracking-wide">Sustainable Practice</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Ecological responsibility integrated into every design decision.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-light text-sm text-primary mb-3 tracking-wide">Cultural Continuity</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Bridging traditional wisdom with contemporary architectural innovation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
                <p className="font-heading font-light text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Founded in Tangiers, Morocco — 2018
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-16">
                <h2 className="font-heading font-light text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8">
                  Start a Conversation
                </h2>
                <div className="w-12 h-px bg-primary mx-auto mb-12"></div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <p className="font-body text-sm text-primary leading-relaxed mb-8">
                    We welcome the opportunity to discuss your architectural vision. 
                    Each project begins with understanding your unique requirements and site conditions.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                  <div>
                    <h3 className="font-heading font-light text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                      Studio Location
                    </h3>
                    <p className="text-sm text-primary leading-relaxed">
                      Tangiers, Morocco<br />
                      Quartier Administratif
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-light text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                      Contact Information
                    </h3>
                    <p className="text-sm text-primary leading-relaxed">
                      info@barcode-architecture.com<br />
                      +212 539 XXX XXX
                    </p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <a href="mailto:info@barcode-architecture.com">Send Message</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
