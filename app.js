//Creating button functions

var keyword;
var year1;
var year2;
var records;
    
//Search Button click listener
$("#search-button").click(function() {

    //variables set to values entered.
    keyword = ($("#keyword").val());
    year1 = ($("#start-year").val());
    year2 = ($("#end-year").val());
    if (isNaN(year1) || isNaN(year2)) {
        alert("You must enter a valid year number.")
    };
    records = ($("#record-number").val());
    console.log(keyword, year1, year2, records);
});

$("#clear-button").click(function() {
    $("#keyword").val("");
    $("#start-year").val("");
    $("#end-year").val("");
    $("#record-number").val("Select");
});