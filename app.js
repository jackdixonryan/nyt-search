//Creating button functions

var keyword = "";
var year1 = "1800";
var year2 = "2018";

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
        'hl': true,
        'begin_date': year1 + '0101',
        'end_date': year2 + '1231',
    });

    console.log(url);

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
        console.log(result.response.docs[0].snippet);
        var recordNumber = parseInt($("#record-number").val());


            for (var i = 0; i < recordNumber + 1; i++) {


                //making a card
                var card = $("<div>")
                $(card).attr("class", "card");

                var cardImage = $("<img>")
                var source = result.response.docs[i].multimedia[0].url;
                var imageLink = "https://static01.nyt.com/" 
                + source;
                $(cardImage).attr("src", imageLink);

                $(cardImage).addClass("card-img-top")
                $(card).append(cardImage);

                var cardBody = $("<div>");
                $(cardBody).attr("class", "card-body");
                $(card).append(cardBody);

                var cardTitle = $("<h4>");
                cardTitle.attr("class", "card-title");
                $(cardTitle).text(result.response.docs[i].headline.main);
                $(cardBody).append(cardTitle);

                var cardText = $("<p>");
                $(cardText).attr("class", "card-text");
                $(cardText).text(result.response.docs[i].snippet);
                $(cardBody).append(cardText);

                var cardLink = $("<a>");
                $(cardLink).attr("href", result.response.docs[i].web_url);
                $(cardLink).addClass("btn");
                $(cardLink).addClass("btn-primary");

                var searchSymbol = $("<i>");
                $(searchSymbol).addClass("far");
                $(searchSymbol).addClass("fa-arrow-alt-circle-right");
                $(cardLink).append(searchSymbol);
                
                $(cardLink).append("Read Here");
                $(cardBody).append(cardLink);
                

                $("#results").append(card);
            }


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
    $("#results").html("");
    year1 = "1800";
    year2 = "2018";

});