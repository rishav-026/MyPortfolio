import React from "react";

function StatCard({ title, value, icon }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[var(--color-border)]
        bg-[var(--color-card-soft)]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/10
        hover:bg-[var(--color-card-soft-strong)]
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -right-8
          -top-8
          h-28
          w-28
          rounded-full
          bg-white/5
          blur-3xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      {icon && (
        <div className="mb-5 text-3xl">
          {icon}
        </div>
      )}

      {/* Value */}
      <h2
        className="
          text-4xl
          font-extrabold
          tracking-tight
          text-[var(--color-text)]
        "
      >
        {value}
      </h2>

      {/* Title */}
      <p
        className="
          mt-2
          text-sm
          font-medium
          uppercase
          tracking-[0.18em]
          text-[var(--color-section-muted)]
        "
      >
        {title}
      </p>
    </div>
  );
}

export default StatCard;