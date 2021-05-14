//from data.js
var tableData = data;

//Get reference to table body
var tbody = d3.select("tbody");


//loop through hw_data.js file 
data.forEach(function(UFO_sighting){
    console.log(UFO_sighting);
    var row = tbody.append("tr");
});

// YOUR CODE HERE!
