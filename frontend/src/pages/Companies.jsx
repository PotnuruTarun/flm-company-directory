import React, { useEffect, useMemo, useState } from "react";
import CompanyCard from "../components/CompanyCard";
import CompanyFilters from "../components/CompanyFilters";
import { fetchCompanies } from "../services/companyService";

export default function Companies() {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    industry: "",
    sort: "",
    page: 1,
    limit: 10,
  });
  const [data, setData] = useState({ data: [], total: 0, page: 1, pages: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allOptionsLoaded, setAllOptionsLoaded] = useState(false);
  const [locations, setLocations] = useState([]);
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchCompanies(filters);
        if (!mounted) return;
        console.log("API Response:", res);
        setData(res);
        if (!allOptionsLoaded) {
          const full = await fetchCompanies({ page: 1, limit: 1000 });
          const locs = Array.from(
            new Set(full.data.map((c) => c.location))
          ).sort();
          const inds = Array.from(
            new Set(full.data.map((c) => c.industry))
          ).sort();
          setLocations(locs);
          setIndustries(inds);
          setAllOptionsLoaded(true);
        }
      } catch (err) {
        if (!mounted) return;
        console.error("Fetch error:", err);
        setError(err.message || "Failed to load companies");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [filters]);

  const goPage = (p) => {
    setFilters((f) => ({ ...f, page: p }));
  };

  const pageNumbers = useMemo(() => {
    const pages = data.pages || 1;
    const arr = [];
    for (let i = 1; i <= pages; i++) arr.push(i);
    return arr;
  }, [data.pages]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text)]">
        Companies
      </h1>

      <CompanyFilters
        filters={filters}
        setFilters={setFilters}
        locations={locations}
        industries={industries}
      />

      <div className="mt-8">
        {loading && (
          <div className="text-center py-12 text-[var(--text)]">
            Loading companies...
          </div>
        )}
        {error && (
          <div className="text-center py-12 text-red-600">Error: {error}</div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
              {data.data && data.data.length ? (
                data.data.map((c) => <CompanyCard key={c.id} company={c} />)
              ) : (
                <div className="col-span-full text-center py-8 text-[var(--text)]">
                  No companies found.
                </div>
              )}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-1 md:p-6">
              <div className="text-sm md:text-base font-medium text-[var(--text)]">
                <span className="text-[var(--accent)] font-bold">
                  {data.page}
                </span>{" "}
                of{" "}
                <span className="text-[var(--accent)] font-bold">
                  {data.pages}
                </span>{" "}
                —{" "}
                <span className="text-[var(--muted)]">
                  {data.total} total companies
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <button
                  disabled={data.page <= 1}
                  onClick={() => goPage(data.page - 1)}
                  className="px-4 py-2.5 border-2 border-[var(--border)] rounded-lg font-semibold text-[var(--text)] bg-[var(--input-bg)] hover:bg-[var(--border)] disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  ← Prev
                </button>

                <div className="flex items-center gap-1">
                  {pageNumbers.map((p) => (
                    <button
                      key={p}
                      onClick={() => goPage(p)}
                      className={`w-10 h-10 rounded-lg font-bold transition-all active:scale-95 ${
                        p === data.page
                          ? "bg-gradient-to-r from-[#BFA181] to-[#8D6748] text-white shadow-md"
                          : "border border-[var(--border)] bg-[var(--input-bg)] text-[var(--text)] hover:bg-[var(--border)]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <button
                  disabled={data.page >= data.pages}
                  onClick={() => goPage(data.page + 1)}
                  className="px-4 py-2.5 border-2 border-[var(--border)] rounded-lg font-semibold text-[var(--text)] bg-[var(--input-bg)] hover:bg-[var(--border)] disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  Next →
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
