import { Calendar, Clock, MapPin } from "lucide-react";

import SquareAppointmentsEmbed from "@/components/square/SquareAppointmentsEmbed";
import CalendarIcon from "@/components/icons/CalendarIcon";
import {
  bookingUrl,
  embedIframeSrc,
  embedWidgetScriptUrl,
  squareAppointmentsScriptSrc,
} from "@/config/env";

export default function BookingSection() {
  const widgetScriptSrc =
    squareAppointmentsScriptSrc || embedWidgetScriptUrl;
  const hasScriptEmbed = Boolean(widgetScriptSrc);
  const hasIframeEmbed = Boolean(embedIframeSrc);
  const hasBookingLink = Boolean(bookingUrl);

  return (
    <section id="book" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-primary">
              Book
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Book Your Session
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
              Your first session is free — no commitment required. Use the
              scheduler to pick a time. You will confirm details on the next
              step.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Training available at local gyms and outdoor courts in the
                    Metro area
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Calendar className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="font-medium text-foreground">Availability</p>
                  <p className="text-sm text-muted-foreground">
                    Monday – Saturday, flexible scheduling
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Clock className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="font-medium text-foreground">Session Length</p>
                  <p className="text-sm text-muted-foreground">
                    60-minute sessions, warm-up included
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card p-1 sm:p-2">
            {hasScriptEmbed ? (
              <SquareAppointmentsEmbed scriptSrc={widgetScriptSrc} />
            ) : hasIframeEmbed ? (
              <iframe
                title="Reserve a training session"
                src={embedIframeSrc}
                className="min-h-[min(720px,85vh)] w-full border-0 bg-card"
                loading="lazy"
                allow="payment *; clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : hasBookingLink ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center gap-6 px-6 py-16 text-center">
                <CalendarIcon className="h-10 w-10 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Ready when you are
                  </p>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Open the scheduler to choose a slot. You can embed the
                    appointments widget by configuring your project environment.
                  </p>
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book your session
                </a>
              </div>
            ) : (
              <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 px-6 py-14 text-center">
                <CalendarIcon className="h-10 w-10 text-muted-foreground/50" />
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                  Set{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                    VITE_SQUARE_BOOKING_URL
                  </code>{" "}
                  for a booking button,{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                    VITE_SQUARE_EMBED_URL
                  </code>{" "}
                  for an iframe page or a{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                    .js
                  </code>{" "}
                  widget URL, or{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                    VITE_SQUARE_APPOINTMENTS_SCRIPT_URL
                  </code>{" "}
                  for the script widget.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
