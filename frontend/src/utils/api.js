// Centralized API base URL
// In development: uses Vite proxy (empty string → relative /api/...)
// In production (Vercel): uses VITE_API_URL env var pointing to Render backend
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const apiUrl = (path) => `${API_BASE_URL}${path}`;

export default API_BASE_URL;
