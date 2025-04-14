import type { ApiResponse } from 'types';

export const API_BASE_URL = 'http://localhost:3001/api';

export async function handleApiResponse<T>(response: Response): Promise<T> {
  const data: ApiResponse<T> = await response.json();

  if (!data.success) {
    throw new Error(data.error || 'An unknown error occurred');
  }

  if (typeof data.data === 'undefined') {
    throw new Error('No data returned from API');
  }

  return data.data;
}

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
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

export async function postApi<T>(endpoint: string, data: unknown): Promise<T> {
  return fetchApi<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function fileUploadApi<T>(
  endpoint: string,
  formData: FormData,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData: ApiResponse = await response.json();
    throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
  }

  return handleApiResponse<T>(response);
}