import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUpPage = () => {
  const [role, setRole] = useState<"professional" | "student">("professional");

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 mesh-gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong rounded-2xl p-8 w-full max-w-md"
      >
        <Link to="/" className="font-display font-bold text-xl tracking-tight mb-8 block">
          Biznet<span className="text-primary">.events</span>
        </Link>
        <h1 className="text-2xl font-display font-bold mb-1">Create your account</h1>
        <p className="text-sm text-muted-foreground mb-8">Join the professional network that works</p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Full Name</label>
            <input className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
            <input type="email" className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Password</label>
            <input type="password" className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>

          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">I am a...</label>
            <div className="grid grid-cols-2 gap-2">
              {(["professional", "student"] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-2.5 rounded-lg text-sm font-medium capitalize transition-all border ${
                    role === r ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {role === "professional" && (
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Industry</label>
              <select className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none">
                <option>Tech</option><option>Finance</option><option>Marketing</option><option>Design</option><option>Consulting</option><option>Other</option>
              </select>
            </div>
          )}

          {role === "student" && (
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider">University</label>
              <input className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
          )}

          <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
            <input type="checkbox" className="mt-0.5 accent-primary" />
            I agree to the Terms of Service and Privacy Policy
          </label>

          <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-blue">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary hover:underline font-medium">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
