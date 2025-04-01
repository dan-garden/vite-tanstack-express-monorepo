import { ApiResponse, HealthData } from '../types';

export const checkHealth = (): ApiResponse<HealthData> => {
  return {
    success: true,
    data: {
      status: 'ok'
    }
  };
}; 