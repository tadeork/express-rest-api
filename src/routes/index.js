const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  const defaultHello = {
    message: 'greet',
    data: 'hello'
  };

  res.json(defaultHello);
});

module.exports = router;
