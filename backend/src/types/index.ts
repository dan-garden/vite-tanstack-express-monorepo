export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface HealthData {
  status: string;
} 