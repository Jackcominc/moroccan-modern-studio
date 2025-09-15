import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center h-20">
          <Link 
            to="/"
            className="font-helvetica font-normal text-3xl text-primary tracking-wider"
          >
            BARCODE
          </Link>
          
          <div className="flex items-center space-x-16 mx-auto">
            <Link 
              to="/about"
              className={`font-helvetica text-lg font-bold tracking-widest transition-all duration-300 uppercase px-4 py-2 ${
                location.pathname === '/about' 
                  ? 'text-primary bg-black text-white' 
                  : 'text-muted-foreground hover:bg-black hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/works"
              className={`font-helvetica text-lg font-bold tracking-widest transition-all duration-300 uppercase px-4 py-2 ${
                location.pathname === '/works' 
                  ? 'text-primary bg-black text-white' 
                  : 'text-muted-foreground hover:bg-black hover:text-white'
              }`}
            >
              Works
            </Link>
            <Link 
              to="/contact"
              className={`font-helvetica text-lg font-bold tracking-widest transition-all duration-300 uppercase px-4 py-2 ${
                location.pathname === '/contact' 
                  ? 'text-primary bg-black text-white' 
                  : 'text-muted-foreground hover:bg-black hover:text-white'
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