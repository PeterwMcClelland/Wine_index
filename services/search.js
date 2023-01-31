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