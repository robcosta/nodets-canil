import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server  = express();

//Configurando o template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Configurando pasta pública
server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);
server.use((req, res)=>{
    res.send('Página não encontrada!');
});


server.listen(process.env.PORT);



