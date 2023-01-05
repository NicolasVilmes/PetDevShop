import { Router } from "express";
import * as pageController from '../controller/pageController'
import * as searchController from '../controller/searchController'

const router = Router();

router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/dogs', pageController.cats);
router.get('/dogs', pageController.fishes);
router.get('search', searchController.search);


export default router;