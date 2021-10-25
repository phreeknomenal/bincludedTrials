import { Router } from 'express';
import blogsRouter from './blogPosts';

const router = Router();

router.use('/blogPosts', blogsRouter);

export default router;