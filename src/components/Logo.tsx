import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img src={logo} alt="Body Wise" width={36} height={36} className="h-9 w-9" />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Body<span className="text-primary">Wise</span>
      </span>
    </Link>
  );
}
