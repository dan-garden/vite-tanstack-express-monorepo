import { ApiResponse, HealthData } from '@vite-tanstack-express-monorepo/shared';

export const checkHealth = (): ApiResponse<HealthData> => {
  return {
    success: true,
    data: {
      status: 'ok'
    }
  };
}; 