import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-border bg-card p-8 w-full max-w-md"
      >
        <Link to="/" className="font-display font-bold text-xl tracking-tight mb-8 block">
          biznet<span className="text-muted-foreground font-medium text-sm ml-1">/ai</span>
        </Link>
        <h1 className="text-2xl font-display font-bold mb-1">Get started</h1>
        <p className="text-sm text-muted-foreground mb-8">Create your Biznet AI account</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">First Name</label>
              <input className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Last Name</label>
              <input className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Work Email</label>
            <input type="email" className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Company</label>
            <input className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Password</label>
            <input type="password" className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
          </div>

          <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
            <input type="checkbox" className="mt-0.5" />
            I agree to the Terms of Service and Privacy Policy
          </label>

          <button className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all tracking-wider uppercase text-sm">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-foreground hover:underline font-medium">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
