const express = require('express');
const router = express.Router();
const wines = require('../services/wines');

/* GET wines */
router.get('/', async function(req, res, next) {
  try {
    res.json(await wines.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting wines. `, err.message);
    next(err);
  }
});

/* POST wines */
router.post('/', async function(req, res, next) {
  try {
    res.json(await wines.create(req.body));
  } catch (err) {
    console.error(`Error while creating Index`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await wines.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating wine.`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await wines.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
});

module.exports = router;