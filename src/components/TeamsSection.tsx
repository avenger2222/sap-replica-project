import {
  Settings,
  Bot,
  CloudUpload,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Agile Consulting",
    description: "Process optimization, transformation roadmaps, and continuous improvement frameworks tailored to your business.",
  },
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Workflow automation, RPA integration, and document processing to eliminate manual bottlenecks.",
  },
  {
    icon: CloudUpload,
    title: "Digital Transformation",
    description: "Cloud migration, data modernization, and enterprise integration to future-proof your operations.",
  },
  {
    icon: Headphones,
    title: "Support & Managed Services",
    description: "Application support, platform monitoring, and incident management for uninterrupted operations.",
  },
];

const TeamsSection = () => {
  return (
    <section className="py-20 bg-sap-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          What we do
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Our Services
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          End-to-end capabilities to accelerate your enterprise transformation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-left p-6 rounded-xl bg-background border border-transparent hover:border-border sap-card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="inline-block mt-4 text-sm font-semibold text-primary hover:underline">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
