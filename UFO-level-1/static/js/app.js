//from data.js
var tableData = data;

//Get reference to table body
var tbody = d3.select("tbody");


//loop through hw_data.js file 
/*
data.forEach(function(UFO_sighting){
    console.log(UFO_sighting);
    var row = tbody.append("tr");
});
*/ 

/*data.forEach(function(UFO_sighting){
    console.log(UFO_sighting);
    var row = tbody.append("tr");

    Object.entries(UFO_sighting).forEach(function([key, value]){
        console.log(key, value);
    });


});
*/

/*data.forEach(function(UFO_sighting){
    console.log(UFO_sighting);
    var row = tbody.append("tr");

    Object.entries(UFO_sighting).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
    });
});
*/

data.forEach(function(UFO_sighting){
    console.log(UFO_sighting);
    var row = tbody.append("tr");
    Object.entries(UFO_sighting).forEach(function([key, value]){
        console.log(key,value);

        var cell = row.append("td");
        cell.text(value);
    });
});

// YOUR CODE HERE!
