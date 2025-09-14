import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Tangiers Cultural Center",
      year: "2024",
      category: "Cultural"
    },
    {
      id: 2,
      title: "Coastal Villa Asilah",
      year: "2023", 
      category: "Residential"
    },
    {
      id: 3,
      title: "Urban Plaza Rabat",
      year: "2022",
      category: "Public"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-32">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <h1 className="font-heading font-light text-6xl text-primary tracking-wide">
              Works
            </h1>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="container mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-6xl mx-auto">
            {projects.map((project) => (
              <article key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-secondary border border-border group-hover:border-primary transition-colors"></div>
                
                <div className="p-6 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading font-light text-sm text-primary">
                      {project.title}
                    </h3>
                    <span className="text-muted-foreground text-xs">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground text-xs tracking-wide uppercase">{project.category}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Works;