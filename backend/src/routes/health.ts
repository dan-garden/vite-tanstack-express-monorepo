import { Router } from 'express';
import { checkHealth } from '../lib/health';
import { ApiResponse } from 'types';

const router = Router();

router.get('/', (req, res) => {
  try {
    const data = checkHealth();
    const response: ApiResponse = {
      success: true,
      data
    };
    res.json(response);
  } catch (error) {
    const response: ApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
    res.status(500).json(response);
  }
});

export default router; 