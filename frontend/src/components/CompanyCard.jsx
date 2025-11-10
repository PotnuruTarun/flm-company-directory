import React from "react";

export default function CompanyCard({ company }) {
  return (
    <div className="group h-full bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 cursor-pointer">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-[var(--border)] pb-3">
        <h3 className="text-lg md:text-xl font-bold text-[var(--text)] m-0 line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
          {company.name}
        </h3>
        <span className="text-sm text-[var(--muted)] flex items-center gap-1">
          📍 {company.location}
        </span>
      </div>

      {/* Description */}
      <p className="text-[var(--muted)] text-sm leading-relaxed flex-grow line-clamp-3">
        {company.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-[var(--border)]">
        <div className="inline-flex px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--chip-bg)] to-[var(--chip-bg)]/80 text-[var(--chip-fg)] font-bold text-xs md:text-sm border border-[var(--border)]/50">
          {company.industry}
        </div>
        <div className="text-[var(--text)] font-semibold text-sm whitespace-nowrap">
          👥 {company.employees}
        </div>
      </div>
    </div>
  );
}
