import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Srichakra transformed our supply chain operations — we saw a 35% efficiency gain within the first quarter.",
    author: "VP of Operations",
    company: "Global Logistics Firm",
  },
  {
    quote: "Their agile consulting team helped us rethink our processes from the ground up. The results speak for themselves.",
    author: "CTO",
    company: "Fortune 500 Manufacturer",
  },
  {
    quote: "The Automation Suite reduced our document processing time by 80%. It's been a game-changer for our finance team.",
    author: "CFO",
    company: "Leading Financial Services Provider",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-xs font-semibold text-accent-foreground/60 uppercase tracking-widest mb-4">
          Client success
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What our clients say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-accent-foreground/5 border border-accent-foreground/10 rounded-xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-sap-gold text-sap-gold" />
                ))}
              </div>
              <p className="text-accent-foreground/90 leading-relaxed mb-6 text-sm italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-accent-foreground/60">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
