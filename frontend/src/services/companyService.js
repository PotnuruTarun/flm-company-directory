// Simple service for fetching companies from backend API
const API_BASE = "https://flm-company-directory.onrender.com";

export async function fetchCompanies({ page = 1, limit = 10, search = '', location = '', industry = '', sort = '' } = {}) {
  const params = new URLSearchParams();
  if (page) params.append('page', page);
  if (limit) params.append('limit', limit);
  if (search) params.append('search', search);
  if (location) params.append('location', location);
  if (industry) params.append('industry', industry);
  if (sort) params.append('sort', sort);

  const url = `${API_BASE}/api/companies?${params.toString()}`;
  console.log('Fetching from URL:', url); // DEBUG: log fetch URL
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch companies: ${res.status} - ${text}`);
  }
  const data = await res.json();
  console.log('Fetch response data:', data); // DEBUG: log response data
  return data;
}

export async function fetchCompanyById(id) {
  const res = await fetch(`${API_BASE}/api/companies/${id}`);
  if (!res.ok) throw new Error('Company not found');
  return res.json();
}
