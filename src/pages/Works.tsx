import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Tangiers Cultural Center",
      category: "Cultural",
      year: "2024",
      description: "A contemporary cultural center that bridges traditional Moroccan architecture with modern spatial concepts."
    },
    {
      id: 2,
      title: "Residential Complex Atlas",
      category: "Residential",
      year: "2023",
      description: "Sustainable housing development incorporating passive cooling strategies and local materials."
    },
    {
      id: 3,
      title: "Medina Restoration Project",
      category: "Heritage",
      year: "2023",
      description: "Careful restoration and adaptive reuse of historic structures in the old medina."
    },
    {
      id: 4,
      title: "Coastal Villa Asilah",
      category: "Residential",
      year: "2022",
      description: "Private residence responding to Mediterranean coastal environment with emphasis on natural light."
    },
    {
      id: 5,
      title: "Urban Plaza Rabat",
      category: "Public",
      year: "2022",
      description: "Public space design integrating traditional gathering spaces with contemporary urban needs."
    },
    {
      id: 6,
      title: "Office Complex Casablanca",
      category: "Commercial",
      year: "2021",
      description: "Modern office building with climate-responsive facade and integrated green spaces."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-section">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-primary mb-8">
              Selected Works
            </h1>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              A curated collection of our architectural projects spanning cultural, 
              residential, and public spaces across Morocco.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="container mx-auto px-6 pb-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-architectural mb-6 border border-border group-hover:border-primary transition-colors">
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
                  
                  <p className="text-muted-foreground text-sm mb-3">{project.category}</p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-secondary py-section">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl text-primary mb-6">
              Interested in Our Work?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We welcome the opportunity to discuss new projects and collaborations. 
              Contact us to explore how we can bring your architectural vision to life.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-heading font-medium hover:bg-muted-foreground transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Works;