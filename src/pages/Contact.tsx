const Contact = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="font-helvetica font-light text-7xl md:text-8xl lg:text-9xl text-primary tracking-wide">
            Contact
          </h1>
          <div className="space-y-8 max-w-2xl mx-auto">
            <p className="font-helvetica text-lg text-muted-foreground leading-relaxed">
              Tangiers, Morocco<br />
              <a 
                href="mailto:info@barcode-architecture.com" 
                className="hover:text-primary transition-colors"
              >
                info@barcode-architecture.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;