var tableData = data;

var table_body = d3.select("tbody");
var filter_table_button = d3.select("#filter-btn");
var dateInputField = d3.select("#datetime");
var cityInputField = d3.select("#city");
var table_columns = ["datetime", "city", "state", "country", "shape", "duratationMinutes", "comments"]


tableData.forEach(function(ufo){
    var row = table_body.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    }); 
});

filter_table_button.on("click", function() {

    tbody.html("");
    var inputElement = d3.select("#input");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufo_sighting => 
        ufo_sighting.datetime === inputValue ||
        ufo_sighting.city === inputValue ||
        ufo_sighting.state === inputValue ||
        ufo_sighting.country === inputValue ||
        ufo_sighting.shape === inputValue);

    filteredData.forEach(function(selections) {

    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});
});