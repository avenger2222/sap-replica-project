import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden sap-hero-gradient">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-primary-foreground leading-tight mb-6">
            Driving Agile
            <br />
            Transformation.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-xl">
            We help enterprises streamline processes, accelerate innovation, and achieve operational excellence through intelligent automation and agile methodologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-block bg-primary-foreground text-accent font-semibold text-sm px-6 py-3 rounded-md hover:bg-primary-foreground/90 transition-colors"
            >
              Speak to an Expert Today
            </a>
            <a
              href="#"
              className="inline-block border-2 border-primary-foreground text-primary-foreground font-semibold text-sm px-6 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
