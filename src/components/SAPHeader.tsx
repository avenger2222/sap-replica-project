import { Search, Globe, Phone, Mail } from "lucide-react";

const navItems = ["Services", "Products & Solutions", "Industry Sectors", "Resources", "About", "Contact Us"];

const SAPHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background sap-nav-shadow">
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-9 text-xs">
          <div className="hidden md:flex items-center gap-5">
            <a href="mailto:info@srichakra-agile.com" className="flex items-center gap-1.5 hover:text-primary-foreground/80 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@srichakra-agile.com
            </a>
            <a href="mailto:support@srichakra-agile.com" className="flex items-center gap-1.5 hover:text-primary-foreground/80 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              support@srichakra-agile.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-primary-foreground/80 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-1 hover:text-primary-foreground/80 transition-colors" aria-label="Language">
              <Globe className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div className="border-b border-primary h-1 bg-primary" />
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">S</span>
            </div>
            <span className="hidden sm:inline text-sm font-bold text-foreground leading-tight">
              Srichakra<br className="hidden lg:block" />
              <span className="text-xs font-medium text-muted-foreground">Agile Processes</span>
            </span>
          </a>
          <ul className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:text-primary px-3 py-2 rounded transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#"
            className="hidden md:inline-block bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
          >
            Speak to an Expert
          </a>
        </div>
      </nav>
    </header>
  );
};

export default SAPHeader;
