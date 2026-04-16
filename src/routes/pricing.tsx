import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Body Wise" },
      { name: "description", content: "Transparent pricing for personalized nutrition programs. Standard and group packages available." },
      { property: "og:title", content: "Body Wise Pricing" },
      { property: "og:description", content: "Choose the program that fits your goals." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter Consultation",
    price: "3,500",
    desc: "Single session — assessment and personalized recommendations.",
    features: ["1-hour consultation", "Personalized assessment", "Initial meal guidance", "Email follow-up"],
    cta: "Book Session",
    popular: false,
  },
  {
    name: "Standard Program",
    price: "12,000",
    desc: "Our most popular plan — full personalization and follow-up.",
    features: [
      "Personalized assessment",
      "Custom meal planning",
      "Weekly check-ins (4 weeks)",
      "Continuous follow-up",
      "WhatsApp support",
      "Progress tracking",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Group Package",
    price: "10,800",
    perPerson: true,
    desc: "Up to 4 people — 10% discount per person.",
    features: [
      "Everything in Standard",
      "Group of up to 4",
      "Shared meal planning",
      "Family-friendly approach",
      "10% group discount",
    ],
    cta: "Get Started",
    popular: false,
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container-px mx-auto max-w-7xl py-20 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">
            Simple, premium <span className="text-gradient-brand">programs</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Transparent pricing. Personalized care. No hidden fees.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={`relative flex flex-col border-border/60 p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated ${
                t.popular ? "border-primary/40 ring-1 ring-primary/30" : ""
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{t.price}</span>
                <span className="text-sm font-medium text-muted-foreground">ETB{t.perPerson ? " / person" : ""}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={t.popular ? "brand" : "default"} className="mt-7 w-full" size="lg">
                <Link to="/auth" search={{ redirect: "/booking" }}>{t.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need a tailored corporate or family plan? <Link to="/contact" className="font-medium text-primary hover:underline">Contact us</Link>.
        </p>
      </section>
    </SiteLayout>
  );
}
