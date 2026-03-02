import { Sparkles, Database, Cloud } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Business AI",
    description: "Embedded AI turns business context into action across every process.",
    link: "#",
  },
  {
    icon: Database,
    title: "Business Data Cloud",
    description: "Trusted, contextualized data gives AI and apps shared direction.",
    link: "#",
  },
  {
    icon: Cloud,
    title: "Cloud ERP Applications",
    description: "Cloud ERP apps activate AI insights to orchestrate processes and improve how your business runs.",
    link: "#",
  },
];

const InnovationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Innovation is never at rest
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-sap-light-blue rounded-xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-12 h-12 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                AI · Data · Applications
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Turn connection into momentum
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Bring AI, data, and apps together to create a system where every decision informs the next — turning insight into action and action into continuous innovation.
            </p>
            <div className="space-y-6">
              {pillars.map((pillar) => (
                <a
                  key={pillar.title}
                  href={pillar.link}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary group-hover:underline">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pillar.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <a
              href="#"
              className="inline-block mt-8 text-sm font-semibold text-primary hover:underline"
            >
              Explore Business Suite →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
