import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Dumbbell, Heart, Stethoscope, Sparkles, Activity, LineChart, UserCheck, Quote } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lotus — Personalized Nutrition for Every Body" },
      { name: "description", content: "Premium personalized nutrition coaching for fitness, women's health and medical conditions. Science-based plans designed and followed up by certified nutritionists." },
      { property: "og:title", content: "Lotus — Personalized Nutrition" },
      { property: "og:description", content: "Transform your health through smart, personalized nutrition coaching with Lotus." },
    ],
  }),
  component: HomePage,
});

const categories = [
  {
    icon: Dumbbell,
    title: "Fitness Nutrition",
    desc: "Strategic bulking, cutting and performance plans engineered around your training schedule, recovery needs and body composition goals. Whether you're a beginner building a foundation or an athlete preparing for competition, every macro is calibrated for measurable progress.",
    cat: "fitness",
  },
  {
    icon: Heart,
    title: "Women's Health",
    desc: "Comprehensive nutrition support across every life stage — from preconception and pregnancy through lactation and child nutrition. Our plans honor the unique hormonal, nutrient and emotional demands women face, with continuous coaching that grows with you.",
    cat: "women",
  },
  {
    icon: Stethoscope,
    title: "Medical Nutrition",
    desc: "Evidence-based clinical nutrition for diabetes, hypertension, weight management and more. We work alongside your medical team to translate lab results into practical, sustainable food strategies that improve your numbers and quality of life.",
    cat: "medical",
  },
] as const;

const features = [
  { icon: Sparkles, title: "Personalized Plans", desc: "Every plan is built from the ground up around your body composition, lifestyle, food preferences and personal goals — never a recycled template." },
  { icon: UserCheck, title: "Continuous Follow-up", desc: "Weekly check-ins, real-time messaging support and ongoing plan adjustments mean you're never left guessing between sessions." },
  { icon: Activity, title: "Science-Based Approach", desc: "Every recommendation is grounded in current clinical evidence and reviewed against the latest peer-reviewed nutrition research." },
  { icon: LineChart, title: "Measurable Results", desc: "We track meaningful metrics — body composition, lab markers, energy, adherence — so progress is visible, honest and sustained." },
];

const testimonials = [
  { name: "Hanna T.", role: "Pregnancy program", quote: "I felt supported through every trimester. The plan made eating well effortless." },
  { name: "Daniel M.", role: "Bulking program", quote: "Gained 6kg of lean muscle in 4 months. The macro plan was easy to follow." },
  { name: "Selam A.", role: "Diabetes management", quote: "My A1C dropped significantly. The coaching changed how I think about food." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="animate-fade-up space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Personalized nutrition coaching
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Transform Your Health Through{" "}
              <span className="text-gradient-brand">Smart Nutrition</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Lotus delivers personalized nutrition plans tailored to your body, lifestyle and goals — guided by certified nutritionists who follow you every step of the way. From your first assessment to long-term lifestyle change, we make eating well feel simple, sustainable and genuinely yours.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/services">
                  Explore Programs <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div><span className="text-2xl font-semibold text-foreground">500+</span><br />Clients coached</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="text-2xl font-semibold text-foreground">10+</span><br />Programs offered</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="text-2xl font-semibold text-foreground">98%</span><br />Satisfaction</div>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-10 blur-3xl" />
            <img
              src={heroImg}
              alt="Fresh balanced ingredients"
              width={1536}
              height={1280}
              className="relative aspect-[5/4] w-full rounded-3xl object-cover shadow-elevated"
            />
          </div>
        </div>
      </section>

      {/* SEGMENTED SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Focus</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Programs for every stage of life</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Lotus offers specialized nutrition coaching across three core areas — fitness performance, women's health, and medical nutrition. Each track is built on deep clinical expertise, personalized assessment and ongoing support, so the plan you start today continues to evolve with you.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <Card key={c.title} className="group relative overflow-hidden border-border/60 p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2"
              >
                View Programs <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Lotus</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">A wiser way to eat well</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We combine the rigor of clinical nutrition with the warmth of a coach who actually listens. The result is a program that fits your real life — your kitchen, your schedule, your culture — and produces results you can feel and measure.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Card key={f.title} className="border-border/60 bg-card p-6 text-center shadow-soft">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Client Stories</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Real people, real results</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="relative border-border/60 p-7 shadow-soft">
              <Quote className="h-7 w-7 text-primary/30" />
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center shadow-elevated md:p-16">
          <div className="relative mx-auto max-w-2xl text-primary-foreground">
            <h2 className="text-3xl font-semibold md:text-4xl">Start your health journey today</h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/85">
              A personalized plan, expert clinical guidance and consistent follow-up — all in one program. Take the first step toward sustainable, measurable health change with a team that's invested in your outcome.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
                <Link to="/services">Explore Programs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
