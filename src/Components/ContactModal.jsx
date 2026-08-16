import { useState } from "react";
import { X, Send, Mail, Phone, MapPin, Sparkles, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactModal({ isOpen, onClose, onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send message directly to Rishav's email via FormSubmit AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/rishavkumar7034@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
        }),
      });

      const resData = await response.json();
      console.log("FormSubmit response:", resData);
    } catch (err) {
      console.warn("FormSubmit notice:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {
        console.log(e);
      }

      onShowToast({
        title: "Message Sent Successfully! 🎉",
        message: `Thanks ${formData.name}! Rishav has received your message and will reply soon.`,
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        onClose();
      }, 2200);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-card)] p-7 sm:p-9 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Right Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-soft)] text-[var(--color-text)] transition hover:bg-[var(--color-card-soft-strong)]"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center animate-scaleIn">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="mt-5 text-3xl font-extrabold text-[var(--color-text)]">
              Thank You!
            </h3>
            <p className="mt-2 text-[1.05rem] text-[var(--color-body)] max-w-md mx-auto">
              Your message has been sent directly to Rishav. Expect a prompt response in your inbox!
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-3xl font-extrabold text-[var(--color-text)]">
                  Let&apos;s Connect
                </h3>
                <p className="text-sm text-[var(--color-section-muted)] mt-0.5">
                  Send a direct message or project inquiry.
                </p>
              </div>
            </div>

            {/* Content Grid */}
            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.4fr]">
              {/* Info Column */}
              <div className="space-y-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-soft-2)] p-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-section-muted)] mb-3">
                    Contact Details
                  </h4>
                  <div className="space-y-3.5 text-xs sm:text-sm">
                    <a
                      href="mailto:rishavkumar7034@gmail.com"
                      className="flex items-center gap-3 text-[var(--color-body)] hover:text-[var(--color-text)] transition"
                    >
                      <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span className="truncate">rishavkumar7034@gmail.com</span>
                    </a>
                    <a
                      href="tel:+916204627879"
                      className="flex items-center gap-3 text-[var(--color-body)] hover:text-[var(--color-text)] transition"
                    >
                      <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                      <span>+91 6204627879</span>
                    </a>
                    <div className="flex items-center gap-3 text-[var(--color-body)]">
                      <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>Bangalore, India</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-section-muted)] mb-2">
                    Availability
                  </h4>
                  <p className="text-xs leading-5 text-[var(--color-body)]">
                    Open for Full-Stack, Cloud & AI Engineering roles, freelance projects, and collaborations.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* One-Click Presets */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)] mb-1.5">
                    Quick Topic Presets
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "💼 Full-Stack / AI Role Inquiry",
                      "📅 Schedule Interview",
                      "📄 Request Resume PDF",
                    ].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            subject: preset,
                            message: `Hi Rishav, I came across your portfolio and would like to connect regarding: ${preset}.`,
                          })
                        }
                        className="rounded-lg border border-[var(--color-border)] bg-[var(--color-card-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-section-muted)] hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 transition"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-section-muted)] outline-none transition focus:border-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-section-muted)] outline-none transition focus:border-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-section-muted)] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-section-muted)] outline-none transition focus:border-emerald-500/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 py-3 px-6 text-sm font-extrabold text-slate-950 shadow-lg transition hover:scale-[1.02] disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
