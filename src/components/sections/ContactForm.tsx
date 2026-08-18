"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSending(true);
        // TODO: wire this up to a real endpoint once ready
        setTimeout(() => {
            setSending(false);
            setSubmitted(true);
        }, 500);
    }
    return (
    <section id="contact" className="scroll-mt-24 bg-charcoal py-24 md:py-28">
      <div className="max-w-295 mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14 md:gap-20">
          {/* Info column */}
          <div>
            <span className="spec-tag text-red mb-5">Get In Touch</span>
            <h2 className="font-display text-white text-3xl md:text-[2.6rem] leading-[1.05] mb-6">
              Contact Us
            </h2>
            <p className="text-[#c9c4b8] text-[15px] leading-relaxed mb-10 max-w-sm">
              Questions about a project, or ready for a quote? Send us a few
              details and we&apos;ll get back to you.
            </p>
            <div className="flex flex-col gap-4 font-mono text-sm">
              <a
                href={SITE.phoneHref}
                className="text-white/90 hover:text-orange transition-colors"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-white/90 hover:text-orange transition-colors"
              >
                {SITE.email}
              </a>
              <span className="text-steel">{SITE.address}</span>
            </div>
          </div>

          {/* Form column */}
          <div>
            {submitted ? (
              <div className="border border-steel/40 p-10 flex flex-col items-start gap-3">
                <span className="spec-tag text-orange">Message Sent</span>
                <p className="text-white text-lg font-heading uppercase tracking-wide">
                  Thanks — we&apos;ll be in touch shortly.
                </p>
                <p className="text-[#c9c4b8] text-sm leading-relaxed">
                  A member of our team typically responds within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Field label="Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone Number" name="phone" type="tel" />
                <Field label="Subject" name="subject" type="text" required />

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] tracking-widest uppercase text-steel">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="bg-charcoal-2 border border-steel/40 text-white px-4 py-3 text-sm leading-relaxed focus:outline-none focus:border-orange transition-colors resize-none"
                  />
                </label>

                <button
                  type="submit"
                  disabled={sending}
                  className="self-start font-heading text-sm tracking-[0.08em] uppercase px-8 py-4 bg-orange text-white hover:bg-red transition-colors disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[11px] tracking-widest uppercase text-steel">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="bg-charcoal-2 border border-steel/40 text-white px-4 py-3 text-sm focus:outline-none focus:border-orange transition-colors"
      />
    </label>
  );
}
