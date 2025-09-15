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
    <div className="flex-1 flex items-center justify-center">
      <div className="container mx-auto px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="font-helvetica font-light text-7xl md:text-8xl lg:text-9xl text-primary tracking-wide">
            Works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="text-center space-y-4">
                <h3 className="font-helvetica font-light text-base text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.year}</p>
                <p className="text-muted-foreground text-xs tracking-wide uppercase">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;