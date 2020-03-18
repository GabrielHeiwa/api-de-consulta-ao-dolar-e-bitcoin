import express from 'express';
import router from './src/routes/routes.js'

let app = express();

app.use(express.static('src/public'));
app.use(express.static('node_modules'));;
app.use(router)

app.listen(3000);