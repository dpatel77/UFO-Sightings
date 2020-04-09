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












