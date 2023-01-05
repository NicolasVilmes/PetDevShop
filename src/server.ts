import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './Routes/index'

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'Views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../Public')));

server.use(mainRoutes);

server.use((req, res)=>{
    res.render('Pages/404');
});

server.listen(process.env.PORT);