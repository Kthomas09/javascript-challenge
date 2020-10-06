// from data.js
var tableData = data;
// targeting the table body
var table = d3.select("#table");
// creating functionality for the search/filter button
var searchButton = d3.select("#filter-btn");
// creating funcitonality to search/filter cities
var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state")
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");

// reading in the data from data.js
data.forEach (obj => {
    var row = table.append("tr");
    Object.entries(obj).forEach(([key,value])=>{
        console.log(`${key} and ${value}`)
        var tdata = table.append("td");
        tdata.text(value);
    })
});






