// Reading in the data from data.js
var tableData = data;

// variable to target the table body
var table_body = d3.select("tbody");
// varibale to target the filter button
var filter_table_button = d3.select("#filter-btn");
// varibale to target the date input field
var dateInputField = d3.select("#datetime");
// variable to list each column in the table
var table_columns = ["datetime", "city", "state", "country", "shape", "duratationMinutes", "comments"]

// function to read through the data
var addData = (dataInput) => {
    dataInput.forEach(ufo => {
        var table_row = table_body.append("tr");
        table_columns.forEach(c => table_row.append("td").text(ufo[c]))
    });
}

addData(tableData);

// function to filter data for the date input and adding it to the html.
filter_table_button.on("click", ()=> {
    d3.event.preventDefault();
    var date = dateInputField.property("value").trim();
    var filterDate = tableData.filter(data=>data.datetime === date);
    table_body.html("");
    let response = {
        filterDate
    }
    if (response.filterDate.length !==0) {
        addData(filterDate);
    }
    else {
        table_body.append("tr").append("td").text("No Sightings, Choose Another Date")
    }
});