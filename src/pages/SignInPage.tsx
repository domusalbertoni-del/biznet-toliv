import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignInPage = () => (
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-card p-8 w-full max-w-md"
    >
      <Link to="/" className="font-display font-bold text-xl tracking-tight mb-8 block">
        biznet<span className="text-muted-foreground font-medium text-sm ml-1">/ai</span>
      </Link>
      <h1 className="text-2xl font-display font-bold mb-1">Welcome back</h1>
      <p className="text-sm text-muted-foreground mb-8">Sign in to your account</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="text-xs text-muted-foreground uppercase tracking-wider">Email</label>
          <input type="email" className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground uppercase tracking-wider">Password</label>
          <input type="password" className="w-full mt-1 px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
        </div>
        <div className="flex justify-end">
          <Link to="#" className="text-xs text-foreground hover:underline">Forgot password?</Link>
        </div>
        <button className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all">
          Sign In
        </button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
        <div className="relative flex justify-center"><span className="bg-card px-3 text-xs text-muted-foreground">or</span></div>
      </div>

      <button className="w-full py-2.5 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-2">
        <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Sign in with Google
      </button>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Don't have an account?{" "}
        <Link to="/signup" className="text-foreground hover:underline font-medium">Sign Up</Link>
      </p>
    </motion.div>
  </div>
);

export default SignInPage;
