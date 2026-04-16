import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Eye, Target, Compass, GraduationCap, Award, HeartHandshake } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Body Wise" },
      { name: "description", content: "Meet Afomiya Solomon and the Body Wise team — certified nutritionists building personalized, science-based programs." },
      { property: "og:title", content: "About Body Wise" },
      { property: "og:description", content: "Our vision, mission and approach to personalized nutrition." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Body Wise</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
              A clinical, caring approach to <span className="text-gradient-brand">personalized nutrition</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We blend nutritionist authority with friendly coaching to help you reach measurable health outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Eye, title: "Vision", text: "A world where every individual has access to personalized, science-based nutrition that transforms their wellbeing." },
            { icon: Target, title: "Mission", text: "To deliver expert nutrition coaching that produces measurable, lasting health outcomes for every client." },
            { icon: Compass, title: "Approach", text: "Personalized plans, continuous follow-up and evidence-based strategies — built around your real life." },
          ].map((b) => (
            <Card key={b.title} className="border-border/60 p-8 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-15 blur-2xl" />
            <img
              src={founderImg}
              alt="Afomiya Solomon, Founder"
              width={768}
              height={896}
              loading="lazy"
              className="relative aspect-[4/5] w-full max-w-md rounded-3xl object-cover shadow-elevated"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Founder</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Afomiya Solomon</h2>
            <p className="mt-1 text-muted-foreground">Certified Clinical Nutritionist</p>
            <p className="mt-5 leading-relaxed text-foreground/90">
              Afomiya founded Body Wise with a simple belief: every person deserves nutrition advice built around their body, not a one-size-fits-all template. With clinical expertise spanning fitness, women's health and medical nutrition, she leads a coaching practice rooted in science and compassion.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { icon: GraduationCap, label: "Clinical Nutrition" },
                { icon: Award, label: "Certified RD" },
                { icon: HeartHandshake, label: "500+ clients" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
