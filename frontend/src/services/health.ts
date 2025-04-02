import type { HealthData } from '@vite-tanstack-express-monorepo/shared';
import { fetchApi } from '@/utils';

export const healthService = {
  check: async (): Promise<HealthData | undefined> => {
    return fetchApi<HealthData>('/health');
  }
}; 