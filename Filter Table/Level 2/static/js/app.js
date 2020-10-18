// Reading in the data from data.js
var tableData = data;
// variable to target the table body
var table_body = d3.select("tbody");

// function to iterate through the ufo_sightings in the data.js
tableData.forEach((ufo_sighting) =>{
    var table_row = table_body.append("tr");
    Object.entries(ufo_sighting).forEach(([key,value])=>{
        var table_cell = table_row.append("td");
        table_cell.text(value)
    })
});

// variable to target the filter button
var buttonClick = d3.select("#filter-btn");

// function to display data on button click
buttonClick.on("click", function(){
    d3.select("tbody").html("");
    d3.event.preventDefault();

// variables to target each input field and read in the property entered 
    var datetime = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");

// setting the data that will be filtered to display on the html
    filterData = tableData;

// if/else if statements to filter each entry in the input field 
    if (datetime) {
        filterData = filterData.filter(ufo => ufo.datetime === datetime);
    }
    else if (city) {
        filterData = filterData.filter(ufo => ufo.city === city)
    }
    else if (state) {
        filterData = filterData.filter(ufo => ufo.state === state)
    }
    else if (country) {
        filterData = filterData.filter(ufo => ufo.country === country)
    }
    else if (shape) {
        filterData = filterData.filter(ufo=> ufo.shape === shape)
    }
    else {
        table_body.append("tr").append("td").text("No Sightings, Choose Another Date")
    };
   
// iterating through each filtered data from if statements to populate the HTML.
    filterData.forEach((ufo)=>{
        var table_row = table_body.append("tr");
        Object.entries(ufo).forEach(([key, value])=>{
            var table_cell = table_row.append("td");
            table_cell.text(value)
        });
    });
});