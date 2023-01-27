const express = require('express');
const router = express.Router();
const wines = require('../services/wines');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await wines.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;