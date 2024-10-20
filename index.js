import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import { createHandler } from 'graphql-http/lib/use/express';
import graphqlPlayground from 'graphql-playground-middleware-express';
import authMiddleware from './middlewares/auth';
import schema from './graphql/schema/schema';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use(
  '/graphql',
  authMiddleware,
  createHandler({
    schema: schema,
  })
);

app.get('/playground', graphqlPlayground({ endpoint: '/graphql' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/graphql`);
});

export default app;
