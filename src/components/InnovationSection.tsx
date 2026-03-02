import { Zap, Cloud, Shield } from "lucide-react";

const InnovationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Our Flagship Offering
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          The Srichakra Agile Platform
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-sap-light-blue rounded-xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-12 h-12 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Agility · Automation · Intelligence
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Unified platform for enterprise agility
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The Srichakra Agile Platform unifies workflow automation, process optimization, and intelligent analytics into a single, cohesive system — enabling enterprises to move faster and adapt to change continuously.
            </p>
            <div className="space-y-6">
              <a href="#" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:underline">Workflow Engine</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Design, deploy, and optimize business workflows with drag-and-drop simplicity and powerful rules.
                  </p>
                </div>
              </a>
              <a href="#" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Cloud className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:underline">Automation Suite</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Leverage RPA, document processing, and intelligent automation to eliminate manual effort.
                  </p>
                </div>
              </a>
              <a href="#" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:underline">Analytics Dashboard</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Real-time insights and KPI tracking across every process, team, and business unit.
                  </p>
                </div>
              </a>
            </div>
            <a
              href="#"
              className="inline-block mt-8 text-sm font-semibold text-primary hover:underline"
            >
              Request a Demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
