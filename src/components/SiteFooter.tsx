import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lotus is a premium nutrition coaching practice built around personalized plans, clinical expertise and continuous follow-up. We help you transform daily habits into measurable, lasting health outcomes — guided by certified nutritionists who genuinely care about your journey.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Programs</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services/$slug" params={{ slug: "gym-bulking" }} className="hover:text-primary">Gym Bulking</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "pregnancy" }} className="hover:text-primary">Pregnancy Nutrition</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "diabetes" }} className="hover:text-primary">Diabetes Management</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "weight-loss" }} className="hover:text-primary">Weight Loss</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +251 911 000 000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@bodywise.et</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> WhatsApp</li>
              <li className="flex items-center gap-2"><Send className="h-4 w-4 text-primary" /> Telegram</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Lotus Nutrition. All rights reserved.</p>
          <p>Crafted with care for your health journey.</p>
        </div>
      </div>
    </footer>
  );
}
