// from data.js
var tbody = d3.select("tbody");

// console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(ufosightings) {
    // console.log(ufosightings);
    var row = tbody.append("tr");

    Object.entries(ufosightings).forEach(function([key, value]) {
        // console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
    });
});


// Data source
var sightdate = data;

//  get the filter button from the html file
var button = d3.select("#filter-btn");

button.on("click", function () {

    // get the datetime ID from the html file
    var inputElement = d3.select("#datetime");

    // you want the value that you put into the web browser from the inputElement
    var inputValue = inputElement.property("value");

    // console.log(inputValue);
    // console.log(sightdate);

    // filter out all the data for that inputValue
    var filteredData = sightdate.filter(sightdate => sightdate.datetime === inputValue);

    // console.log(filteredData);

    tbody.selectAll("tr").remove();

    // run the same function as above with the filtered data
    filteredData.forEach(function (ufosightings) {
        // console.log(ufosightings);

        var row = tbody.append("tr");

        Object.entries(ufosightings).forEach(function ([key, value]) {
            // console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
    

});












