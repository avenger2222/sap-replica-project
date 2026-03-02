import { Calendar, BookOpen, Lightbulb } from "lucide-react";

const newsItems = [
  {
    icon: Calendar,
    tag: "EVENT",
    title: "Annual Enterprise Innovation Summit",
    description: "Join our flagship event and discover how AI, data, and apps work together across your entire business to drive real results.",
    link: "Register now",
  },
  {
    icon: BookOpen,
    tag: "E-BOOK",
    title: "Start Your AI Journey",
    description: "Learn what it takes to assess your AI readiness, build confidence, and take measurable steps toward long-term value.",
    link: "Read the e-book",
  },
  {
    icon: Lightbulb,
    tag: "ARTICLE",
    title: "Understanding Embedded AI",
    description: "Discover how embedded AI streamlines work by connecting data and decisions inside the systems you already use.",
    link: "Read the article",
  },
  {
    icon: Calendar,
    tag: "EVENT",
    title: "The Fabric of Data & AI",
    description: "Join industry leaders at this virtual event to see how a business data fabric powers trusted, context-rich AI.",
    link: "Register now",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          What's new
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-border sap-card-hover bg-background"
            >
              <div className="h-36 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <item.icon className="w-10 h-10 text-primary/30" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {item.tag}
                </span>
                <h3 className="font-semibold text-foreground mt-2 mb-2 text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <a href="#" className="text-xs font-semibold text-primary hover:underline">
                  {item.link} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
