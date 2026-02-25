const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-sm heading-uppercase tracking-wider mb-4">For Partygoers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Download the app</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All events</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All cities</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm heading-uppercase tracking-wider mb-4">For Organizers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sell tickets</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm heading-uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm heading-uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="text-foreground">
              <path d="M16 2L4 8v16l12 6 12-6V8L16 2z" fill="currentColor" opacity="0.9"/>
              <path d="M16 6l-8 4v12l8 4 8-4V10l-8-4z" fill="hsl(var(--background))"/>
              <path d="M16 10l-4 2v8l4 2 4-2v-8l-4-2z" fill="currentColor"/>
            </svg>
            <span className="font-bold text-sm heading-uppercase tracking-wider">Shotgun</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Shotgun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
