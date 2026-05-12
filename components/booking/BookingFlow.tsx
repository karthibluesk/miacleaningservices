"use client";

import { useMemo, useState } from "react";
import services from "@/data/services.json";
import pricing from "@/data/pricing.json";
import { Button } from "@/components/ui/Button";

type Booking = {
  service: string;
  size: string;
  date: string;
  time: string;
  addons: string[];
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
};

const initial: Booking = { service: "", size: "", date: "", time: "", addons: [], name: "", email: "", phone: "", address: "", notes: "" };
const times = ["8:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"];
const sizes = ["Studio / 1 bed", "2 bedrooms", "3 bedrooms", "4+ bedrooms"];

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [booking, setBooking] = useState<Booking>(initial);
  const selectedService = services.find((s) => s.slug === booking.service);

  const valid = useMemo(() => {
    if (step === 0) return Boolean(booking.service && booking.size);
    if (step === 1) return Boolean(booking.date && booking.time);
    if (step === 2) return true;
    return Boolean(booking.name && booking.email.includes("@") && booking.phone && booking.address);
  }, [booking, step]);

  function toggleAddon(name: string) {
    setBooking((b) => ({ ...b, addons: b.addons.includes(name) ? b.addons.filter((a) => a !== name) : [...b.addons, name] }));
  }

  async function submitBooking() {
    if (!valid) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xrejjbgd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New booking request from ${booking.name}`,
          service: selectedService?.title || booking.service,
          size: booking.size,
          date: booking.date,
          time: booking.time,
          addons: booking.addons.join(", ") || "None",
          name: booking.name,
          email: booking.email,
          phone: booking.phone,
          address: booking.address,
          notes: booking.notes,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setDone(true);
    } catch (err) {
      console.error(err);
      setError("Sorry, your request could not be sent. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-teal/20 bg-white p-8 text-center shadow-glow">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sage">Request received</p>
        <h1 className="mt-3 text-3xl font-black">Thank you, {booking.name}.</h1>
        <p className="mt-4 leading-8 text-charcoal/70">Your booking request has been sent. We will contact you soon to confirm the details.</p>
        <Button href="/" className="mt-6">Return Home</Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="rounded-3xl border border-teal/20 bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-8 grid grid-cols-4 gap-2" aria-label="Booking progress">
          {["Service", "Schedule", "Add-ons", "Contact"].map((label, index) => (
            <div key={label}>
              <div className={`h-2 rounded-full ${index <= step ? "bg-teal" : "bg-soft"}`} />
              <p className="mt-2 text-xs font-bold text-charcoal/60">{label}</p>
            </div>
          ))}
        </div>

        {step === 0 && (
          <div>
            <h2 className="text-2xl font-black">Choose your cleaning</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <button key={service.slug} onClick={() => setBooking({ ...booking, service: service.slug })} className={`focus-ring rounded-2xl border p-5 text-left transition hover:bg-mint ${booking.service === service.slug ? "border-teal bg-mint" : "border-teal/20"}`}>
                  <span className="font-black">{service.title}</span>
                  <span className="mt-2 block text-sm text-charcoal/70">{service.summary}</span>
                </button>
              ))}
            </div>
            <h3 className="mt-8 font-black">Home size</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {sizes.map((size) => <button key={size} onClick={() => setBooking({ ...booking, size })} className={`focus-ring rounded-2xl border px-4 py-3 text-left font-semibold ${booking.size === size ? "border-teal bg-mint" : "border-teal/20"}`}>{size}</button>)}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-black">Pick a date and time</h2>
            <label className="mt-6 block font-bold" htmlFor="date">Preferred date</label>
            <input id="date" type="date" value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} className="focus-ring mt-2 w-full rounded-2xl border border-teal/25 px-4 py-3" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {times.map((time) => <button key={time} onClick={() => setBooking({ ...booking, time })} className={`focus-ring rounded-2xl border px-4 py-3 font-semibold ${booking.time === time ? "border-teal bg-mint" : "border-teal/20"}`}>{time}</button>)}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-black">Add special touches</h2>
            <div className="mt-6 grid gap-3">
              {pricing.addons.map((addon) => <button key={addon.name} onClick={() => toggleAddon(addon.name)} className={`focus-ring flex justify-between rounded-2xl border px-4 py-3 font-semibold ${booking.addons.includes(addon.name) ? "border-teal bg-mint" : "border-teal/20"}`}><span>{addon.name}</span><span>{addon.price}</span></button>)}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-black">Your contact details</h2>
            <div className="mt-6 grid gap-4">
              {[
                ["name", "Full name", "text"],
                ["email", "Email", "email"],
                ["phone", "Phone", "tel"],
                ["address", "Service address", "text"]
              ].map(([key, label, type]) => (
                <label key={key} className="font-bold">{label}
                  <input type={type} value={booking[key as keyof Booking] as string} onChange={(e) => setBooking({ ...booking, [key]: e.target.value })} className="focus-ring mt-2 w-full rounded-2xl border border-teal/25 px-4 py-3 font-normal" />
                </label>
              ))}
              <label className="font-bold">Notes
                <textarea value={booking.notes} onChange={(e) => setBooking({ ...booking, notes: e.target.value })} className="focus-ring mt-2 min-h-28 w-full rounded-2xl border border-teal/25 px-4 py-3 font-normal" />
              </label>
            </div>
          </div>
        )}

        {error && <p className="mt-6 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-700">{error}</p>}

        <div className="mt-8 flex justify-between gap-3">
          <Button variant="secondary" onClick={() => setStep(Math.max(0, step - 1))}>Back</Button>
          {step < 3 ? <Button onClick={() => setStep(step + 1)} className={!valid ? "pointer-events-none opacity-50" : ""}>Continue</Button> : <Button onClick={submitBooking} className={!valid || submitting ? "pointer-events-none opacity-50" : ""}>{submitting ? "Sending..." : "Confirm Request"}</Button>}
        </div>
      </div>

      <aside className="h-fit rounded-3xl border border-teal/20 bg-mint/60 p-6">
        <h2 className="text-xl font-black">Booking summary</h2>
        <dl className="mt-5 grid gap-3 text-sm">
          <div><dt className="font-bold">Service</dt><dd>{selectedService?.title || "Not selected"}</dd></div>
          <div><dt className="font-bold">Home size</dt><dd>{booking.size || "Not selected"}</dd></div>
          <div><dt className="font-bold">Date / time</dt><dd>{booking.date || "Date"} at {booking.time || "time"}</dd></div>
          <div><dt className="font-bold">Add-ons</dt><dd>{booking.addons.length ? booking.addons.join(", ") : "None"}</dd></div>
        </dl>
        <p className="mt-5 rounded-2xl bg-white/70 p-4 text-sm leading-6 text-charcoal/70">Final pricing is confirmed after reviewing your home size, service type, condition, and add-ons.</p>
      </aside>
    </div>
  );
}
