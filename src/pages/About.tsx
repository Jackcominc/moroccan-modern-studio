const About = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="font-heading font-light text-7xl md:text-8xl lg:text-9xl text-primary tracking-wide">
            Studio
          </h1>
          <div className="space-y-8 max-w-2xl mx-auto">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Founded in 2018, BARCODE creates contemporary architecture that honors Moroccan traditions while embracing modern design principles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-4">
                <h3 className="font-heading font-light text-base text-primary">Contextual Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Architecture responding to environment and culture.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading font-light text-base text-primary">Sustainable Practice</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ecological responsibility in every decision.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading font-light text-base text-primary">Cultural Continuity</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bridging tradition with innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;