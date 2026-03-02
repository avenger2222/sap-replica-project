const footerSections = [
  {
    title: "Products",
    links: ["ERP", "CRM", "Analytics", "AI Solutions", "Cloud Platform", "Supply Chain"],
  },
  {
    title: "Support",
    links: ["Product Support", "Training", "Certification", "Community", "Documentation"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Investor Relations", "News", "Sustainability"],
  },
  {
    title: "Quick Links",
    links: ["Contact Us", "Partner Finder", "Trust Center", "Accessibility", "Legal"],
  },
];

const SAPFooter = () => {
  return (
    <footer className="bg-sap-navy text-primary-foreground">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4 text-primary-foreground/80">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-6 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold tracking-wider">SAP</span>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/40">
            © 2026 SAP SE. This is a demo recreation for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SAPFooter;
