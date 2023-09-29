import { Router } from 'express';
const router = Router();

import { adController } from './controller/ad.controller';

router.get('/ads', adController.findSpecificArea);
router.get('/ads/all', adController.getAllAds);
router.post('/ads/new', adController.createNewAd);

export default router;
