import Router from 'express';
const router = Router();


router.get('/', (req, res) => {
    res.send('Welcome to mi ApiRest!');
})


export default router;