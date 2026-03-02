import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden sap-hero-gradient">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 w-full">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-primary-foreground leading-tight mb-6">
            Go beyond satisfactory.
            <br />
            Reach exceptional.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-lg">
            Discover intelligent solutions woven across every application and workflow — so your whole business can grow, adapt, and scale together.
          </p>
          <a
            href="#"
            className="inline-block bg-primary-foreground text-primary font-semibold text-sm px-6 py-3 rounded hover:bg-primary-foreground/90 transition-colors"
          >
            Explore Business AI
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
