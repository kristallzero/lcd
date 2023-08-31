import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.render('lcd', {title: 'lcd'})
});

router.post('/', (req, res) => {
  const {fs, ss} = req.body;
  if (fs.length === 0 || fs.length > 16 || ss.length === 0 || ss.length > 16)
    return res.render('lcd', {title: 'lcd', error: true});
  
  res.render('lcd', {title: 'lcd', success: true});
});

export default router;