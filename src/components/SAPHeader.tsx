import { Search, User, Globe } from "lucide-react";

const navItems = ["Products", "Industries", "Services", "Learning", "Community", "Partners", "About"];

const SAPHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background sap-nav-shadow">
      <div className="border-b border-primary h-1 bg-primary" />
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-14">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-1">
            <div className="w-10 h-6 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold tracking-wider">SAP</span>
            </div>
          </a>
          <ul className="hidden lg:flex items-center gap-1">
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
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:inline-block text-sm font-medium text-foreground hover:text-primary transition-colors">
            Explore SAP
          </a>
          <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="User account">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Region">
            <Globe className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SAPHeader;
