const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-primary mb-4">BARCODE</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovative architectural design studio<br />
              creating contemporary spaces that<br />
              bridge tradition and modernity.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-primary mb-4">Office</h4>
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
          
          <div>
            <h4 className="font-heading font-medium text-primary mb-4">Services</h4>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li>Architectural Design</li>
              <li>Interior Design</li>
              <li>Urban Planning</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-muted-foreground text-sm text-center">
            © 2024 BARCODE Architecture Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;