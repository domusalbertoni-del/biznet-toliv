import { Link } from "react-router-dom";

const BiznetFooter = () => {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-lg tracking-tight" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontStyle: 'italic' }}>
          hypr<span className="text-muted-foreground">.biz</span>
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
