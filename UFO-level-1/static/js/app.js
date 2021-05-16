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

/*data.forEach(function(UFO_sighting){
    console.log(UFO_sighting);
    var row = tbody.append("tr");
    Object.entries(UFO_sighting).forEach(function([key, value]){
        console.log(key,value);

        var cell = row.append("td");
        cell.text(value);
    });
});
*/


// YOUR CODE HERE!

//assigns ufo sighting data fromo data.js to variable
var sightings = data;

//select the button
var button = d3.select("#filter-btn", pressEnter);
//select the form 
var form = d3.select("#datetime", pressEnter);

//create event handlers for both button click and form-enter
button.on("click", pressEnter);
form.on("submit", pressEnter);

//event handler function 
function pressEnter(){
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log("inputValue")
    console.log(sightings);

    var filteredSightings = sightings.filter(sight => sight.datetime === inputValue);
    filteredSightings.forEach(function(see){
        console.log(see);
        var row = tbody.append("tr");
        Object.entries(see).forEach(function([key, value]){
            console.log(key,value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
    

};