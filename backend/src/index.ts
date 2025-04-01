import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRoutes from './routes/health';

dotenv.config();
const port = process.env.PORT || 3001;
const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000']
}));

app.use(express.json());

app.use('/api/health', healthRoutes);

if (import.meta.env.PROD) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export const viteNodeApp = app;