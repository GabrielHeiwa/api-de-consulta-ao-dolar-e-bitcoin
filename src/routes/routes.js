import express from 'express';
import path from "path";

let router = express.Router();

router.get('/home', (req, res) => {
    res.sendFile(path.resolve() + '/src/public/pages/home.html')
})

router.get('/', (req, res) => {
    res.redirect('/home');
})

export default router;