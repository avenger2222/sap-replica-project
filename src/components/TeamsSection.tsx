import {
  DollarSign,
  ShoppingCart,
  Truck,
  Users,
  Heart,
  Server,
  RefreshCw,
  Leaf,
  Network,
} from "lucide-react";
import { useState } from "react";

const teams = [
  {
    icon: DollarSign,
    title: "Financial Management",
    description: "See what's coming and act with precision using solutions that help you manage uncertainty, optimize processes, and enable compliance.",
  },
  {
    icon: ShoppingCart,
    title: "Spend Management",
    description: "Implement AI-powered spend management processes from source to pay with an integrated suite of solutions to deliver spend visibility, control, and savings.",
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description: "Run a risk-resilient and sustainable supply chain that can adapt to anything with solutions for planning, manufacturing, and logistics.",
  },
  {
    icon: Users,
    title: "Human Capital Management",
    description: "Align your workforce and business priorities with AI-enabled solutions for core HR, payroll, talent management, and more.",
  },
  {
    icon: Heart,
    title: "Customer Experience",
    description: "Connect e-commerce, marketing, sales, and service data — and use AI to personalize the customer experience at every touchpoint.",
  },
  {
    icon: Server,
    title: "Business Technology Platform",
    description: "Unlock the full potential of your AI, data, and applications with a technology platform built for enterprise mission-critical processes.",
  },
  {
    icon: RefreshCw,
    title: "Business Transformation",
    description: "Turn transformation into a core capability with solutions that connect people, processes, applications, and data.",
  },
  {
    icon: Leaf,
    title: "Sustainability Management",
    description: "Build a more compliant, sustainable, and resilient business with AI-powered sustainability solutions.",
  },
  {
    icon: Network,
    title: "Business Network",
    description: "Collaborate with trading partners across procurement, supply chain, logistics, and asset management.",
  },
];

const TeamsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-sap-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Support every team and strengthen every process
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Equip every team with the tools to adapt, scale, and deliver real results.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {teams.map((team, i) => (
            <button
              key={team.title}
              onClick={() => setActiveIndex(i)}
              className={`text-left p-6 rounded-xl transition-all duration-200 sap-card-hover ${
                activeIndex === i
                  ? "bg-background shadow-lg border border-primary/20"
                  : "bg-background border border-transparent hover:border-border"
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <team.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{team.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {team.description}
              </p>
              <span className="inline-block mt-4 text-sm font-semibold text-primary hover:underline">
                Learn more →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
