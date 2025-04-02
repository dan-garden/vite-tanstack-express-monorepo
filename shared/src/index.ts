// API Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Health Check Types
export interface HealthData {
  status: string;
}