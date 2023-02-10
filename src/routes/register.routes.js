import {Router} from 'express'
import { getRegister ,  createRegister } from '../controllers/register.js';

const  router = Router();


router.get('/register', getRegister);

router.post('/register', createRegister);

export default router;