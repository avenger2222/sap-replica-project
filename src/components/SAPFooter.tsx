import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Services",
    links: ["Agile Consulting", "Intelligent Automation", "Digital Transformation", "Support & Managed Services"],
  },
  {
    title: "Products & Solutions",
    links: ["Agile Platform", "Automation Suite", "Cloud Solutions", "Integration Hub"],
  },
  {
    title: "Company",
    links: ["About Us", "Leadership", "Mission & Vision", "Partners", "Careers"],
  },
  {
    title: "Resources",
    links: ["Case Studies", "Whitepapers", "Reports", "Articles", "Videos"],
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
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">S</span>
            </div>
            <span className="text-sm font-bold text-primary-foreground">
              Srichakra Agile Processes
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="mailto:info@srichakra-agile.com" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
        <p className="text-xs text-primary-foreground/30 text-center mt-6">
          © 2026 Srichakra Agile Processes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SAPFooter;
