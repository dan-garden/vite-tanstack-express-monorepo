import type { HealthData } from 'types';
import { fetchApi } from '../utils';

export const healthService = {
  check: async (): Promise<HealthData | undefined> => {
    return fetchApi<HealthData>('/health');
  }
}; 