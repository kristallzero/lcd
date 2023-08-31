import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.render('abyss', {title: 'abyss', posts: []});
});

export default router;