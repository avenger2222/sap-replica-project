import { Handshake, Search, UserPlus } from "lucide-react";

const partnerCards = [
  {
    icon: Search,
    title: "Apps and Extensions",
    description: "Discover, try, and buy solutions from partners. Browse a wide variety of applications, services, and more.",
    link: "Explore partner solutions",
  },
  {
    icon: Handshake,
    title: "Find a Partner",
    description: "Find partners that can identify, build, implement, support, and run the solutions that best fit your requirements.",
    link: "Discover potential partners",
  },
  {
    icon: UserPlus,
    title: "Become a Partner",
    description: "See how to become a partner and find out about the resources and tools we provide to help you grow.",
    link: "Partner with us",
  },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-sap-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Accelerate success with our extensive partner ecosystem
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {partnerCards.map((card) => (
            <div
              key={card.title}
              className="bg-background rounded-xl overflow-hidden sap-card-hover border border-transparent hover:border-border"
            >
              <div className="h-44 bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center">
                <card.icon className="w-12 h-12 text-primary/40" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {card.description}
                </p>
                <a href="#" className="text-sm font-semibold text-primary hover:underline">
                  {card.link} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
