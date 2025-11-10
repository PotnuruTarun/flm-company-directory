import React from "react";

export default function CompanyFilters({
  filters,
  setFilters,
  locations = [],
  industries = [],
}) {
  const update = (patch) => setFilters((f) => ({ ...f, ...patch, page: 1 }));

  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl shadow-md p-4 md:p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
        {/* Search Input */}
        <div className="md:col-span-2 lg:col-span-2">
          <input
            className="w-full px-4 py-3 border border-[var(--border)] rounded-xl bg-[var(--input-bg)] text-[var(--text)] placeholder-gray-400 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
            placeholder="Search companies..."
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
          />
        </div>

        {/* Location Select */}
        <select
          className="px-3 py-3 border border-[var(--border)] rounded-xl bg-[var(--input-bg)] text-[var(--text)] appearance-none cursor-pointer focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238D6748' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundPosition: "right 12px center",
            backgroundRepeat: "no-repeat",
            paddingRight: "36px",
          }}
          value={filters.location}
          onChange={(e) => update({ location: e.target.value })}
        >
          <option value="">All locations</option>
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>

        {/* Industry Select */}
        <select
          className="px-4 py-3 border border-[var(--border)] rounded-xl bg-[var(--input-bg)] text-[var(--text)] appearance-none cursor-pointer focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238D6748' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundPosition: "right 12px center",
            backgroundRepeat: "no-repeat",
            paddingRight: "36px",
          }}
          value={filters.industry}
          onChange={(e) => update({ industry: e.target.value })}
        >
          <option value="">All industries</option>
          {industries.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>

        {/* Sort Select */}
        <select
          className="px-4 py-3 border border-[var(--border)] rounded-xl bg-[var(--input-bg)] text-[var(--text)] appearance-none cursor-pointer focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238D6748' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
            backgroundPosition: "right 12px center",
            backgroundRepeat: "no-repeat",
            paddingRight: "36px",
          }}
          value={filters.sort}
          onChange={(e) => update({ sort: e.target.value })}
        >
          <option value="">Sort</option>
          <option value="name_asc">Name ↑</option>
          <option value="name_desc">Name ↓</option>
          <option value="employees_asc">Employees ↑</option>
          <option value="employees_desc">Employees ↓</option>
        </select>

        {/* Clear Button */}
        <button
          className="col-span-1 md:col-span-2 lg:col-span-1 px-4 py-3 bg-[var(--border)]/20 hover:bg-[var(--border)]/40 text-[var(--text)] font-semibold rounded-xl transition-all active:scale-95"
          onClick={() =>
            setFilters({
              search: "",
              location: "",
              industry: "",
              sort: "",
              page: 1,
              limit: 10,
            })
          }
        >
          Clear
        </button>
      </div>
    </div>
  );
}
