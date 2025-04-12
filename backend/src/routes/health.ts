import { Router } from 'express';
import { checkHealth } from '../lib/health';

const router = Router();

router.get('/', (req, res) => {
  try {
    const response = checkHealth();
    res.json(response);
  } catch (error) {
    res.json({
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    });
  }
});

export default router; 