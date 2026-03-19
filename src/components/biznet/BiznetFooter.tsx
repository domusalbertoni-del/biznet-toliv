import { Link } from "react-router-dom";

const BiznetFooter = () => {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="font-display font-bold text-lg tracking-tight">
          biznet<span className="text-muted-foreground font-medium text-sm ml-1">/ai</span>
        </Link>
        <div className="flex items-center gap-6">
          {["Solutions", "Research", "Company", "Careers", "Privacy", "Terms"].map((link) => (
            <Link
              key={link}
              to="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default BiznetFooter;
