const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-heading font-normal text-xl text-primary tracking-wider"
          >
            BARCODE
          </button>
          
          <div className="hidden md:flex items-center space-x-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="font-heading text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="font-heading text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-heading text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-heading text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button className="text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;