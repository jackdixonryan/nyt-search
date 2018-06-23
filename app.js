//Creating button functions

var keyword = "";
var year1 = "";
var year2 = "";

function getInfo() {

    console.log(keyword);

            // Built by LucyBot. www.lucybot.com
            // if( year field has value){'facet=1'}
            //     if(facet ==1){
            //         'facet_fields': var
            //     }


    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    url += '?' + $.param({
        'api-key': "be051ce4a2914a458d75290b6bccb660",
        'q': keyword,
        'begin_date': year1 + '0101',
        'end_date': year2 + '0101',
        'hl': true,
    });

    console.log(url);

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
        console.log(result.response.docs[0].snippet);
        $("#results").html(result.response.docs[0].headline.main);
    }).fail(function (err) {
        throw err;
    });


}

$("#keyword").on('change', function () {
    keyword = $(this).val();
    console.log(keyword);
});
$("#start-year").on('change', function () {
    year1 = $(this).val();
    console.log(keyword);
});
$("#end-year").on('change', function () {
    year2 = $(this).val();
    console.log(keyword);
});

$("#clear-button").click(function() {
    $("#keyword").val("");
    $("#start-year").val("");
    $("#end-year").val("");
    $("#record-number").val("Select");
});