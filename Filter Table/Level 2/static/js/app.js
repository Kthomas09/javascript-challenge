var tableData = data;

var table_body = d3.select("tbody");

tableData.forEach((ufo_sighting) =>{
    console.log(ufo_sighting);
});



















































































// tableData.forEach(function(ufo){
//     var row = table_body.append("tr");
//     Object.entries(ufo).forEach(function([key, value]) {
//         var cell = row.append("td");
//         cell.text(value);
//     }); 
// });
// filter_table_button.on("click", ()=>{
    //     d3.event.preventDefalt();
//     var dateValue = dateInputField.property("value").trim();
//     var cityValue = cityInputField.property("value").trim();
//     var filter = tableData.filter(tableData=> tableData.table_columns ===)
// })

// filter_table_button.on("click", ()=> {
//     d3.event.preventDefault();
//     var date = dateInputField.property("value").trim();
//     var filterDate = tableData.filter(tableData=>tableData.datetime === date);
//     table_body.html("");
//     let response = {
//         filterDate
//     }
//     if (response.filterDate.length !==0) {
//         addData(filterDate);
//     }
//     else {
//         table_body.append("tr").append("td").text("No Sightings, Choose Another Date")
//     }
// // });
// // filter_table_button.on("click", function() {

// //     table_body.html("")
// //     var inputElement = d3.select("#input");
// //     var dropDownInput = d3.select(".form-control");
// //     var dropDownValue = dropDownInput.property("value");
// //     var stateValue = inputElement.property("value");
// //     var countryValue = inputElement.property("value");
// //         // if dropDownValue === state
// //     console.log(dropDownValue)
// //     console.log(stateValue)
// //     if (dropDownValue == "State") {
// //         var filteredData = tableData.filter(ufo_sighting => ufo_sighting.stateValue == stateValue);
// //         filteredData.forEach(function("State"))
// //     };
//     // var stateValue = stateInput.property("value");

//     // table_body.html("");
//     // var inputElement = d3.select("#input");
//     // var dateInputValue = inputElement.property("value");
//     // var cityInputValue = inputElement.property("value");
//     // var stateInputValue = inputElement.property("value");
//     // var countryInputValue = inputElement.property("value");
//     // var shapeInputValue = inputElement.property("value");
//     // var filteredData = tableData.filter(ufo_sighting => 
//     //     ufo_sighting.datetime === dateInputValue ||
//     //     ufo_sighting.city === cityInputValue ||
//     //     ufo_sighting.state === stateInputValue ||
//     //     ufo_sighting.country === countryInputValue ||
//     //     ufo_sighting.shape === shapeInputValue);

//     filteredData.forEach(function(selections) {

//     var row = table_body.append("tr");
//     Object.entries(selections).forEach(function([key, value]) {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// });
