// from data.js
var tableData = data;
// targeting the table body
var table = d3.select("#table");
// targing functionality for the search/filter button
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
        // console.log(`${key} and ${value}`)
        var tdata = table.append("td");
        tdata.text(value);
    })
});

// functionality for the search button
searchButton.on("click",function() {
    table.html("");
    console.log("Loading Your Filter Results ...");
    // date functionality
    var inputField = d3.select("#datetime");
    var inputElement = inputField.property("value");
    console.log(inputElement);
    var inputArray = data.filter(d => d.datetime === inputElement);
    console.log(inputArray);
    inputArray.forEach((selection) => {
        var row = table.append("tr");
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });    

// // City Functionality
// searchButton.on("click",function() {
//     table.html("");
//     console.log("Loading Your Filter Results ...");
//     // date functionality
//     var inputField = d3.select("#city");
//     var inputElement = inputField.property("value");
//     console.log(inputElement);
//     var inputArray = data.filter(c => c.city === inputElement);
//     console.log(inputArray) 

    
//     // State Functionality
//     searchButton.on("click",function() {
//         table.html("");
//         console.log("Loading Your Filter Results ...");
//         // date functionality
//         var inputField = d3.select("#state");
//         var inputElement = inputField.property("value");
//         console.log(inputElement);
//         var inputArray = data.filter(s => s.state === inputElement);
//         console.log(inputArray)  
   
//     // Country Functionality
//     var inputField = d3.select("#country");
//     var inputElement = inputField.property("value");
//     console.log(inputElement);
//     var inputArray = data.filter(x => x.country === inputElement);
//     console.log(inputArray) 
//     // Shape Functionality
//     var inputField = d3.select("#shape");
//     var inputElement = inputField.property("value");
//     console.log(inputElement);
//     var inputArray = data.filter(x => x.shape === inputElement);
//     console.log(inputArray) 

// })








