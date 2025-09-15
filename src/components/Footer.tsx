const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-helvetica font-bold text-xl text-primary mb-4">BARCODE</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovative architectural design studio<br />
              creating contemporary spaces that<br />
              bridge tradition and modernity.
            </p>
          </div>
          
          <div>
            <h4 className="font-helvetica font-medium text-primary mb-4">Office</h4>
            <address className="text-muted-foreground text-sm not-italic leading-relaxed">
              Architecture Studio<br />
              Tangiers, Morocco<br />
              <br />
              <a 
                href="mailto:info@barcode-architecture.com" 
                className="hover:text-primary transition-colors"
              >
                info@barcode-architecture.com
              </a>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-6">
          <p className="text-muted-foreground text-sm text-center">
            BARCODE {new Date().getFullYear()} ©
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;