import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, CircleCheck } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/booking")({
  validateSearch: (search: Record<string, unknown>) => ({
    program: typeof search.program === "string" ? search.program : undefined,
  }),
  head: () => ({
    meta: [{ title: "Book a Session — Lotus" }],
  }),
  component: Booking,
});

const steps = ["Program", "Date & Time", "Confirm"] as const;

function Booking() {
  const { program: initialProgram } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [program, setProgram] = useState<string | undefined>(initialProgram);
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const [done, setDone] = useState(false);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return { iso: d.toISOString().slice(0, 10), label: d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" }) };
  });
  const times = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

  const selectedProgram = services.find((s) => s.slug === program);

  if (done) {
    return (
      <SiteLayout>
        <section className="container-px mx-auto flex min-h-[calc(100vh-8rem)] max-w-xl items-center justify-center py-16">
          <Card className="w-full border-border/60 p-10 text-center shadow-elevated">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CircleCheck className="h-9 w-9" />
            </div>
            <h1 className="mt-5 text-2xl font-semibold">Booking confirmed</h1>
            <p className="mt-2 text-muted-foreground">
              Your session is booked for{" "}
              <span className="font-medium text-foreground">{date}</span> at{" "}
              <span className="font-medium text-foreground">{time}</span>.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">A confirmation has been sent to your email.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild variant="brand"><Link to="/dashboard">Go to Dashboard</Link></Button>
              <Button asChild variant="outline"><Link to="/">Back to Home</Link></Button>
            </div>
          </Card>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-px mx-auto max-w-3xl py-12">
        <h1 className="text-3xl font-semibold md:text-4xl">Book your session</h1>
        <p className="mt-1 leading-relaxed text-muted-foreground">A few quick steps to get you on the calendar — pick your program, choose a time that works for you and we'll send a confirmation straight to your inbox.</p>

        {/* Stepper */}
        <ol className="mt-8 flex items-center gap-2">
          {steps.map((s, i) => (
            <li key={s} className="flex flex-1 items-center gap-2">
              <div className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold",
                i <= step ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"
              )}>
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className={cn("text-sm font-medium", i === step ? "text-foreground" : "text-muted-foreground")}>{s}</span>
              {i < steps.length - 1 && <div className="ml-2 h-px flex-1 bg-border" />}
            </li>
          ))}
        </ol>

        <Card className="mt-6 border-border/60 p-7 shadow-soft">
          {step === 0 && (
            <div>
              <h2 className="text-lg font-semibold">Choose a program</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => setProgram(s.slug)}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-all hover:border-primary/50",
                      program === s.slug ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border"
                    )}
                  >
                    <p className="font-medium">{s.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.short}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold"><Calendar className="h-5 w-5 text-primary" /> Choose a date</h2>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {dates.map((d) => (
                    <button
                      key={d.iso}
                      onClick={() => setDate(d.label)}
                      className={cn(
                        "rounded-lg border px-3 py-3 text-sm font-medium transition-colors hover:border-primary/50",
                        date === d.label ? "border-primary bg-primary text-primary-foreground" : "border-border"
                      )}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold"><Clock className="h-5 w-5 text-primary" /> Choose a time</h2>
                <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {times.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={cn(
                        "rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors hover:border-primary/50",
                        time === t ? "border-primary bg-primary text-primary-foreground" : "border-border"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-semibold">Confirm your booking</h2>
              <dl className="mt-5 divide-y divide-border rounded-xl border border-border">
                <div className="flex items-center justify-between p-4">
                  <dt className="text-sm text-muted-foreground">Program</dt>
                  <dd className="text-sm font-medium">{selectedProgram?.title ?? "—"}</dd>
                </div>
                <div className="flex items-center justify-between p-4">
                  <dt className="text-sm text-muted-foreground">Date</dt>
                  <dd className="text-sm font-medium">{date ?? "—"}</dd>
                </div>
                <div className="flex items-center justify-between p-4">
                  <dt className="text-sm text-muted-foreground">Time</dt>
                  <dd className="text-sm font-medium">{time ?? "—"}</dd>
                </div>
              </dl>
            </div>
          )}

          <div className="mt-7 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              Back
            </Button>
            {step < 2 ? (
              <Button
                variant="brand"
                onClick={() => setStep((s) => s + 1)}
                disabled={(step === 0 && !program) || (step === 1 && (!date || !time))}
              >
                Continue
              </Button>
            ) : (
              <Button variant="brand" onClick={() => setDone(true)}>Confirm booking</Button>
            )}
          </div>
        </Card>
      </section>
    </SiteLayout>
  );
}
