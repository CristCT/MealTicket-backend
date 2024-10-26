import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import { createHandler } from 'graphql-http/lib/use/express';
import { renderPlaygroundPage } from 'graphql-playground-html';
import authMiddleware from './middlewares/auth.js';
import schema from './graphql/schema/schema.js';
import 'dotenv/config';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

connectDB();

app.use(
  '/graphql',
  authMiddleware,
  createHandler({
    schema: schema,
  })
);

app.get('/playground', (req, res) => {
  res.send(renderPlaygroundPage({ endpoint: '/graphql' }));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/graphql`);
});

export default app;
