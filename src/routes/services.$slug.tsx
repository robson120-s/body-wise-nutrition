import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Users, Target, Sparkles } from "lucide-react";
import { categoryMeta, getService } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Body Wise` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} — Body Wise` },
          { property: "og:description", content: loaderData.service.short },
        ]
      : [{ title: "Service — Body Wise" }],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-px mx-auto max-w-3xl py-24 text-center">
        <h1 className="text-3xl font-semibold">Program not found</h1>
        <p className="mt-2 text-muted-foreground">The program you're looking for doesn't exist.</p>
        <Button asChild className="mt-6"><Link to="/services">Back to Services</Link></Button>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="container-px mx-auto max-w-3xl py-24 text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container-px mx-auto max-w-5xl py-16 md:py-20">
          <Link to="/services" className="text-sm font-medium text-primary hover:underline">
            ← Back to Services
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">
            {categoryMeta[service.category].label}
          </p>
          <h1 className="mt-2 text-4xl font-semibold md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{service.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/auth" search={{ redirect: `/booking?program=${service.slug}` }}>
                Purchase Program <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Talk to a nutritionist</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-5xl py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: "Benefits", items: service.benefits },
            { icon: Users, title: "Who it's for", items: service.whoFor },
            { icon: Target, title: "Program outcomes", items: service.outcomes },
          ].map((block) => (
            <Card key={block.title} className="border-border/60 p-7 shadow-soft">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <block.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{block.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {block.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-brand p-10 text-center text-primary-foreground shadow-elevated md:p-14">
          <h2 className="text-3xl font-semibold">Ready to begin?</h2>
          <p className="mt-2 text-primary-foreground/85">Sign in to purchase this program and start your plan.</p>
          <Button asChild size="lg" className="mt-6 bg-background text-primary hover:bg-background/90">
            <Link to="/auth" search={{ redirect: `/booking?program=${service.slug}` }}>
              Purchase Program
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
