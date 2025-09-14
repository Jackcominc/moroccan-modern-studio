import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/"
            className="font-heading font-normal text-xl text-primary tracking-wider"
          >
            BARCODE
          </Link>
          
          <div className="flex items-center space-x-16">
            <Link 
              to="/about"
              className={`font-heading text-xs tracking-widest transition-colors uppercase ${
                location.pathname === '/about' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/works"
              className={`font-heading text-xs tracking-widest transition-colors uppercase ${
                location.pathname === '/works' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Works
            </Link>
            <Link 
              to="/contact"
              className={`font-heading text-xs tracking-widest transition-colors uppercase ${
                location.pathname === '/contact' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;