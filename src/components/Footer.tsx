import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-12 py-8">
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground text-sm">
            <div>BARCODE {new Date().getFullYear()} ©</div>
            <div>Tangiers — Morocco</div>
          </div>
          
          <div className="flex items-center space-x-4 text-muted-foreground text-sm">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:info@barcode-architecture.com" 
              className="hover:text-primary transition-colors"
            >
              info@barcode-architecture.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;