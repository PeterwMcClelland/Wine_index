const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, brand, vintage, varietal, appellation, harvest_date, aging, bottling_date, alcohol 
    FROM wines LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(wines){

  const result = await db.query(
    `INSERT INTO wines
    (brand, vintage, varietal, appellation, harvest_date, aging, bottling_date, alcohol) 
    VALUES 
    (${wines.brand}, ${wines.vintage}, ${wines.varietal}, ${wines.appellation}, ${wines.harvest_date}, ${wines.aging}, ${wines.bottling_date}, ${wines.alcohol})`
  );

  let message = 'Error in creating Index';

  if (result.affectedRows) {
    message = 'Index created successfully';
  }

  return {message};
}

async function update(id, wines){
  const result = await db.query(
    `UPDATE wines 
    SET brand="${wines.brand}", vintage=${wines.vintage}, varietal=${wines.varietal}, 
    appellation=${wines.appellation}, harvest_date=${wines.harvest_date}, aging=${wines.aging}, bottling_date${wines.bottling_date}, alcohol${wines.alcohol} 
    WHERE id=${id}` 
  );

  let message = 'Error in updating wine';

  if (result.affectedRows) {
    message = 'Index updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM wines WHERE id=${id}`
  );

  let message = 'Error in deleting Index';

  if (result.affectedRows) {
    message = 'Index deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}