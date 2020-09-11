import Router from 'express';
const router = Router();

import newsController from '../controllers/news.controller';

router.get('/', newsController.getIndexNews);
router.post('/', newsController.postIndexNews);


export default router;