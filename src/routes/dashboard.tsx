import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, BookOpen, MessageCircle, TrendingUp, Activity, Target } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{ title: "Dashboard — Body Wise" }],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-7xl py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Welcome back,</p>
            <h1 className="text-3xl font-semibold md:text-4xl">Selam 👋</h1>
            <p className="mt-1 text-muted-foreground">Here's a snapshot of your current program.</p>
          </div>
          <Button asChild variant="brand">
            <Link to="/booking">Book a session</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-border/60 p-7 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-primary">Active Program</p>
                <h2 className="mt-1 text-xl font-semibold">Standard Nutrition Program</h2>
                <p className="text-sm text-muted-foreground">Week 2 of 4 · Personalized meal plan</p>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary md:inline-flex">
                <Target className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-semibold">50%</span>
              </div>
              <Progress value={50} className="mt-2" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Sessions completed", value: "4 / 8", icon: Activity },
                { label: "Weight change", value: "-2.1 kg", icon: TrendingUp },
                { label: "Adherence", value: "92%", icon: Target },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-muted/40 p-4">
                  <s.icon className="h-4 w-4 text-primary" />
                  <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
                  <p className="text-lg font-semibold">{s.value}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-border/60 p-7 shadow-soft">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">Upcoming session</p>
            <h3 className="mt-1 text-lg font-semibold">Follow-up call</h3>
            <p className="mt-1 text-sm text-muted-foreground">Wed, 3:00 PM with Afomiya</p>
            <div className="mt-4 rounded-xl border border-border bg-muted/40 p-4">
              <Calendar className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-medium">Next: Apr 24, 2026</p>
              <p className="text-xs text-muted-foreground">30 min · Video call</p>
            </div>
            <Button asChild className="mt-5 w-full" variant="outline">
              <Link to="/booking">Reschedule</Link>
            </Button>
          </Card>
        </div>

        <h2 className="mt-12 text-xl font-semibold">Quick actions</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Calendar, title: "Book session", desc: "Schedule your next call.", to: "/booking" },
            { icon: BookOpen, title: "View plan", desc: "See your meal plan.", to: "/dashboard" },
            { icon: MessageCircle, title: "Contact nutritionist", desc: "Reach Afomiya directly.", to: "/contact" },
          ].map((a) => (
            <Link key={a.title} to={a.to} className="group">
              <Card className="border-border/60 p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
