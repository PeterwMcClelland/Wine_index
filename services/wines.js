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
    (bottle_name, brand, vintage, varietal, appellation, harvest_date, aging, bottling_date, alcohol) 
    VALUES 
    (${wines.bottle_name}, ${wines.brand}, ${wines.vintage}, ${wines.varietal}, ${wines.appellation}, ${wines.harvest_date}, ${wines.aging}, ${wines.bottling_date}, ${wines.alcohol})`
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




const api_url = "http://localhost:3000/wines";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Bottle</th>
          <th>Brand</th>
          <th>Vintage</th>
          <th>Varietal</th>
          <th>appellation</th>
          <th>Harvest Date</th>
          <th>Aging</th>
          <th>Bottle Date</th>
          <th>Alcohol %</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${wines.bottle_name} </td>
    <td>${wines.brand}</td>
    <td>${wines.vintage}</td> 
    <td>${wines.varietal}</td>
    <td>${wines.appellation}</td>
    <td>${wines.harvest_date}</td>
    <td>${wines.aging}</td>
    <td>${wines.bottle_date}</td>
    <td>${wines.alcohol}</td>               
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("wines").innerHTML = tab;
}




module.exports = {
  getMultiple,
  create,
  update,
  remove
}

