import type { ApiResponse } from '@vite-tanstack-express-monorepo/shared';

export const API_BASE_URL = 'http://localhost:3001/api';

export async function handleApiResponse<T>(response: Response): Promise<T | undefined> {
  const data: ApiResponse<T> = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'An unknown error occurred');
  }

  return data.data;
}

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T | undefined> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData: ApiResponse = await response.json();
    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
  }

  return handleApiResponse<T>(response);
} 