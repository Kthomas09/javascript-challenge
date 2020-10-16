var tableData = data;

var table_body = d3.select("tbody");
var filter_table_button = d3.select("#filter-btn");
var dateInputField = d3.select("#datetime");
var cityInputField = d3.select("#city");
var table_columns = ["datetime", "city", "state", "country", "shape", "duratationMinutes", "comments"]

var addData = (dataInput) => {
    dataInput.forEach(ufo => {
        var table_row = table_body.append("tr");
        table_columns.forEach(c => table_row.append("td").text(ufo[c]))
    });
}

addData(tableData);

filter_table_button.on("click", ()=> {
    d3.event.preventDefault();
    var date = dateInputField.property("value").trim();
    var filterDate = tableData.filter(tableData=>tableData.datetime === date);
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

tableData.forEach(function(ufo){
    var row = table_body.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    }) 
});
    
filter_table_button.on("click", function(){
    table_body.html("");
    var inputElement = d3.select("#input");
    var inputValue = d3.inputElement.property("value");
    var filtered_data = tableData.filter(ufo_sighting => ufo_sighting.datetime === inputValue ||
                                                         ufo_sighting.city === inputValue ||
                                                         ufo_sighting.state === inputValue ||
                                                         ufo_sighting.country === inputValue ||
                                                         ufo_sighting.shape === inputValue)
    console.log(filtered_data)

})