const logos = [
  "Acme Energy", "NovaTech", "Stellar Manufacturing", "GlobalEdge Retail", "PrimeWorks",
  "BlueShift Health", "Quantum Logistics", "Zenith Finance", "Apex Industries", "Vertex Labs",
  "CoreSync", "DataPulse", "IronBridge", "SkyForge", "TrueNorth",
];

const CustomersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Trusted worldwide
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Trusted by enterprises across industries
        </h2>
        <a href="#" className="text-sm font-semibold text-primary hover:underline">
          View our success stories →
        </a>
        <div className="mt-12 overflow-hidden relative">
          <div className="flex animate-scroll-logos gap-12 items-center">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 w-36 h-16 bg-sap-gray-100 rounded-lg flex items-center justify-center"
              >
                <span className="text-sm font-semibold text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
