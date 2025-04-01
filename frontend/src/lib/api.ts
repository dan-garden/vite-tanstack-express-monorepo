import { ApiResponse, HealthResponse } from '@vite-tanstack-express/shared-types';

const API_BASE_URL = 'http://localhost:3001/api';

async function fetchApi<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export const api = {
  health: {
    check: () => fetchApi<HealthResponse>('/health'),
  },
}; 