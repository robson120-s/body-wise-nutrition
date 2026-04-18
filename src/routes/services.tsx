import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell, Heart, Stethoscope } from "lucide-react";
import { categoryMeta, services, type ServiceCategory } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lotus" },
      { name: "description", content: "Explore Lotus nutrition programs across fitness, women's health and medical nutrition — each plan personalized, clinically grounded and continuously coached." },
      { property: "og:title", content: "Lotus Services" },
      { property: "og:description", content: "Categorized nutrition programs for every life stage and health goal." },
    ],
  }),
  component: ServicesPage,
});

const catIcons: Record<ServiceCategory, typeof Dumbbell> = {
  fitness: Dumbbell,
  women: Heart,
  medical: Stethoscope,
};

function ServicesPage() {
  const cats: ServiceCategory[] = ["fitness", "women", "medical"];
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container-px mx-auto max-w-7xl py-20 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Programs</p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">
            Nutrition coaching, <span className="text-gradient-brand">made for you</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Choose from specialized programs across three core categories. Each plan is fully personalized to your body, goals and lifestyle — and supported by weekly check-ins, ongoing adjustments and direct access to your nutritionist throughout the program.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl space-y-20 py-20">
        {cats.map((cat) => {
          const Icon = catIcons[cat];
          const list = services.filter((s) => s.category === cat);
          return (
            <div key={cat}>
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-5">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold md:text-3xl">{categoryMeta[cat].label}</h2>
                    <p className="text-sm text-muted-foreground">{categoryMeta[cat].tagline}</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {list.map((s) => (
                  <Card key={s.slug} className="group flex flex-col border-border/60 p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                    <Button asChild variant="ghost" className="mt-5 w-fit -ml-3 text-primary hover:bg-primary/10">
                      <Link to="/services/$slug" params={{ slug: s.slug }}>
                        View Details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </SiteLayout>
  );
}
