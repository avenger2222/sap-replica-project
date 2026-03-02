import { Zap, Factory, ShoppingBag, HeartPulse, Truck, Landmark, Building2 } from "lucide-react";

const sectors = [
  { icon: Zap, title: "Energy & Utilities" },
  { icon: Factory, title: "Manufacturing" },
  { icon: ShoppingBag, title: "Retail & Consumer Goods" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Truck, title: "Logistics & Supply Chain" },
  { icon: Landmark, title: "Financial Services" },
  { icon: Building2, title: "Public Sector" },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-sap-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Industry expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Industry Sectors We Serve
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Deep domain knowledge across the industries that matter most.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <a
              key={sector.title}
              href="#"
              className="bg-background rounded-xl p-6 sap-card-hover border border-transparent hover:border-border flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <sector.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{sector.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
