import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lotus" },
      { name: "description", content: "Get in touch with Lotus. Call us, message on WhatsApp or Telegram, or send us an email — a certified nutritionist will respond within one business day." },
      { property: "og:title", content: "Contact Lotus" },
      { property: "og:description", content: "Speak to a certified nutritionist today and start building your personalized plan." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container-px mx-auto max-w-7xl py-20 text-center md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">
            Speak with a <span className="text-gradient-brand">nutritionist today</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The fastest way to get started is a quick phone call — we'll listen, answer your questions and help you choose the right program. Prefer to write? WhatsApp, Telegram and email all reach us directly, and we respond within one business day.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Primary CTA: phone */}
          <Card className="lg:col-span-1 flex flex-col items-center justify-center bg-gradient-brand p-10 text-center text-primary-foreground shadow-elevated">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-background/20 backdrop-blur">
              <Phone className="h-7 w-7" />
            </div>
            <p className="text-sm uppercase tracking-wider opacity-90">Call Now</p>
            <a href="tel:+251911000000" className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              +251 911 000 000
            </a>
            <p className="mt-3 text-sm opacity-90">Available Mon–Sat, 8am – 7pm</p>
            <Button asChild size="lg" className="mt-6 bg-background text-primary hover:bg-background/90">
              <a href="tel:+251911000000">Call Lotus</a>
            </Button>
          </Card>

          {/* Secondary contact channels */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+251 911 000 000", href: "https://wa.me/251911000000" },
              { icon: Send, label: "Telegram", value: "@bodywise", href: "https://t.me/bodywise" },
              { icon: Mail, label: "Email", value: "hello@bodywise.et", href: "mailto:hello@bodywise.et" },
              { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", href: "#map" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="font-semibold">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Card className="border-border/60 p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Tell us a little about your goals and we'll respond within one business day with next steps and the program that fits best.</p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Message sent — we'll be in touch soon.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} required />
              </div>
              <Button type="submit" variant="brand" size="lg" className="w-full">Send Message</Button>
            </form>
          </Card>

          <Card id="map" className="overflow-hidden border-border/60 p-0 shadow-soft">
            <div className="flex h-full min-h-[400px] items-center justify-center bg-gradient-hero">
              <div className="text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <MapPin className="h-7 w-7" />
                </div>
                <p className="mt-3 font-semibold">Addis Ababa, Ethiopia</p>
                <p className="text-sm text-muted-foreground">Map placeholder</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}
