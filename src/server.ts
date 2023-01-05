import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './Routes/index'

dotenv.config();

const server = express();

server.set('View engine', 'mustache');
server.set('Views', path.join(__dirname, 'Views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../Public')));

server.use(mainRoutes);

server.use((req, res) => {
  res.send('Página não encontrada!');
});

server.listen(process.env.PORT);