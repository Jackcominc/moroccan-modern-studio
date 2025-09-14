import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h1 className="font-heading font-light text-7xl md:text-8xl lg:text-9xl text-primary tracking-wide">
              BARCODE
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Contemporary Architecture Studio<br />
              Tangiers, Morocco
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
