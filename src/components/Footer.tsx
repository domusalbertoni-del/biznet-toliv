const Footer = () => {
  return (
    <footer className="border-t border-border py-10 mt-8">
      <div className="px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="font-bold text-xs heading-uppercase tracking-widest text-muted-foreground mb-4">For Partygoers</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Download the app</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All events</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All cities</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs heading-uppercase tracking-widest text-muted-foreground mb-4">For Organizers</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sell tickets</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs heading-uppercase tracking-widest text-muted-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs heading-uppercase tracking-widest text-muted-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <span className="font-bold text-sm">
            shotliv<span className="text-gradient">.</span>events
          </span>
          <p className="text-xs text-muted-foreground">© 2025 Shotliv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
