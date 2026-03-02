import { FileText, BookOpen, Video, Newspaper } from "lucide-react";

const resources = [
  {
    icon: FileText,
    tag: "CASE STUDY",
    title: "How a Global Manufacturer Cut Lead Times by 40%",
    description: "Discover how Srichakra's agile consulting and automation suite transformed manufacturing operations.",
    link: "Read the case study",
  },
  {
    icon: BookOpen,
    tag: "WHITEPAPER",
    title: "The Enterprise Guide to Intelligent Automation",
    description: "A comprehensive look at RPA, document processing, and workflow automation for large-scale operations.",
    link: "Download the whitepaper",
  },
  {
    icon: Video,
    tag: "VIDEO",
    title: "Digital Transformation in Action",
    description: "Watch how enterprises are leveraging cloud migration and data modernization to gain competitive advantage.",
    link: "Watch now",
  },
  {
    icon: Newspaper,
    tag: "ARTICLE",
    title: "5 Steps to Building an Agile Enterprise",
    description: "Learn the key strategies for embedding agility into every layer of your organization.",
    link: "Read the article",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
          Resources
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Featured Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, i) => (
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
