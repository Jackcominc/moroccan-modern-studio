import { Link, useLocation } from "react-router-dom";
import barcodeBg from "../assets/barcode-bg.png";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-background">
      <div className="container mx-auto px-12">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/"
            className="font-helvetica font-normal text-3xl text-primary tracking-wider relative group transition-all duration-300"
          >
            {/* Top barcode strip */}
            <div 
              className="absolute -top-3 left-0 w-full h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${barcodeBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Bottom barcode strip */}
            <div 
              className="absolute -bottom-3 left-0 w-full h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url(${barcodeBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            <span className="relative z-10 group-hover:bg-white group-hover:px-2 group-hover:py-1 transition-all duration-300">
              BARCODE
            </span>
          </Link>
          
          <div className="flex items-center space-x-16">
            <Link 
              to="/about"
              className={`font-helvetica text-lg font-bold tracking-widest transition-all duration-300 uppercase px-2 py-1 ${
                location.pathname === '/about' 
                  ? 'text-primary bg-black text-white' 
                  : 'text-muted-foreground hover:bg-black hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/works"
              className={`font-helvetica text-lg font-bold tracking-widest transition-all duration-300 uppercase px-2 py-1 ${
                location.pathname === '/works' 
                  ? 'text-primary bg-black text-white' 
                  : 'text-muted-foreground hover:bg-black hover:text-white'
              }`}
            >
              Works
            </Link>
            <Link 
              to="/contact"
              className={`font-helvetica text-lg font-bold tracking-widest transition-all duration-300 uppercase px-2 py-1 ${
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