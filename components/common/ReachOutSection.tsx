"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import SlideInText from "@/components/styleComponent/SlideInTextAnimation";
import {
  PROFILE,
  SHOW_CONTACT_FORM,
  SOCIALS,
  SocialDataType,
} from "@/data/profile";

export default function ReachOutSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [responseMessageType, setResponseMessageType] = useState<"error" | "success">(
    "success"
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        setResponseMessage("Message sent — I'll get back to you.");
        setResponseMessageType("success");
      } else {
        setResponseMessage(`Error: ${data.error}`);
        setResponseMessageType("error");
      }
    } catch {
      setResponseMessage("Failed to send. Please email me directly.");
      setResponseMessageType("error");
    }
    setLoading(false);
    setTimeout(() => setResponseMessage(""), 5000);
  };

  const fieldClass =
    "w-full rounded-lg border border-line bg-raised px-4 py-3 text-[15px] text-ink placeholder:text-faint focus:border-accent focus:outline-none";

  return (
    <div className="w-full pt-22">
      <SectionHeading index="05" title="Reach out" />
      <div
        className={`grid grid-cols-1 gap-14 rounded-3xl border border-line bg-surface p-8 md:p-14 ${
          SHOW_CONTACT_FORM ? "lg:grid-cols-[1.1fr_1fr]" : ""
        }`}
      >
        <SlideInText>
          <div className={SHOW_CONTACT_FORM ? "" : "max-w-3xl"}>
            <h3 className="mb-4 text-[clamp(28px,3.4vw,42px)] font-semibold leading-tight tracking-tight">
              Got a backend that needs to scale?
            </h3>
            <p className="mb-8 max-w-[44ch] text-[17px] leading-relaxed text-muted">
              Open to senior full-stack and backend roles, plus selected contract work.
              The fastest answer is email.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-lg bg-accent px-6 py-3.5 text-[15px] font-semibold !text-accent-contrast hover:opacity-85"
              >
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.phoneHref}
                className="rounded-lg border border-line px-6 py-3.5 font-mono text-sm !text-ink hover:border-faint"
              >
                {PROFILE.phone}
              </a>
            </div>

            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
              {SOCIALS.map((social: SocialDataType) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col gap-1 bg-raised px-4.5 py-5 !text-ink transition-colors hover:bg-accent-soft hover:!text-accent"
                  >
                    <span className="font-mono text-[13px] font-medium">
                      {social.name}
                    </span>
                    <span className="font-mono text-[10.5px] text-faint">
                      {social.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </SlideInText>

        {/* Contact form — hidden while SHOW_CONTACT_FORM is false.
            Do not delete: flip the flag in data/profile.ts to restore it. */}
        {SHOW_CONTACT_FORM && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
              Send a message
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={fieldClass}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={fieldClass}
              required
            />
            <textarea
              name="message"
              placeholder="What are you building?"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={fieldClass}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer rounded-lg bg-ink px-6 py-3.5 text-[15px] font-semibold text-canvas hover:bg-accent hover:text-accent-contrast disabled:cursor-default disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send message"}
            </button>
            {responseMessage && (
              <p
                role="status"
                className={`text-center font-mono text-xs ${
                  responseMessageType === "success" ? "text-accent" : "text-red-400"
                }`}
              >
                {responseMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
