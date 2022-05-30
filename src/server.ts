//import
import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

import session from 'express-session';
import cookieParser from 'cookie-parser';

import router from './routes/challange.routes'

//Express 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use(express.static(path.join(__dirname, '../public')));

// sessions
declare module 'express-session' {
    interface SessionData {
        username: string
    }
}

app.use(cookieParser())
app.use(session( {
    secret: 'diyorbek sog` bo`l',
    saveUninitialized: true,
    proxy: true,
}))


//Handlebars 
app.engine ('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './pages');


//routes

app.use('/', router)


app.listen(8080, () => {
    console.log('Server is running ...');
})


