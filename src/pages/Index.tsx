import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Tangiers Cultural Center",
      category: "Cultural",
      year: "2024",
    },
    {
      id: 2,
      title: "Coastal Villa Asilah", 
      category: "Residential",
      year: "2022",
    },
    {
      id: 3,
      title: "Urban Plaza Rabat",
      category: "Public", 
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-section">
          <div className="max-w-5xl">
            <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-primary mb-8 leading-tight">
              Contemporary<br />
              Architecture<br />
              Studio
            </h1>
            
            <div className="max-w-2xl">
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                BARCODE creates innovative architectural solutions that honor Moroccan traditions 
                while embracing contemporary design principles. Based in Tangiers, we specialize 
                in contextual design that responds to climate, culture, and community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-muted-foreground">
                  <Link to="/works">View Our Work</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Start a Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="bg-secondary py-section">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary">
                Featured Works
              </h2>
              <Link 
                to="/works" 
                className="text-muted-foreground hover:text-primary transition-colors font-heading text-sm tracking-wide"
              >
                View All Projects →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <article key={project.id} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-architectural mb-6 border border-border group-hover:border-primary transition-colors">
                    <div className="w-full h-full bg-gradient-to-br from-architectural to-mediterranean flex items-center justify-center">
                      <span className="text-architectural-foreground font-heading text-sm opacity-50">
                        [{project.title}]
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-heading font-medium text-primary group-hover:text-muted-foreground transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-muted-foreground text-sm">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{project.category}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="container mx-auto px-6 py-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl text-primary mb-6">
                Design with Purpose
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Every project begins with careful observation of site, climate, and cultural context. 
                We develop design solutions that are both environmentally responsible and socially relevant, 
                creating spaces that serve communities while respecting their heritage.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Our approach combines rigorous spatial analysis with deep appreciation for local materials 
                and construction techniques, resulting in architecture that is both innovative and timeless.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-card p-6 border border-border">
                <h3 className="font-heading font-medium text-primary mb-3">Contextual Design</h3>
                <p className="text-muted-foreground text-sm">
                  Architecture that responds to its unique environmental and cultural setting.
                </p>
              </div>
              <div className="bg-card p-6 border border-border">
                <h3 className="font-heading font-medium text-primary mb-3">Sustainable Practice</h3>
                <p className="text-muted-foreground text-sm">
                  Ecological responsibility integrated into every design decision.
                </p>
              </div>
              <div className="bg-card p-6 border border-border">
                <h3 className="font-heading font-medium text-primary mb-3">Cultural Continuity</h3>
                <p className="text-muted-foreground text-sm">
                  Bridging traditional wisdom with contemporary architectural innovation.
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

export default Index;
