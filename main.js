$("document").ready(function(){
    var quote;
    var author;
    function getNextQuote(){
        $.ajax({
            url:"http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            data:{
                method: "getQuote",
                format: "jsonp",
                lang: "en"
            },
            success: function(response){
                quote = response.quoteText;
                author = response.quoteAuthor;
                $("#quote").text(quote);
                if(author){
                    $("#author").text("- " +author);
                }else{
                    $("#author").text("Unknown");
                }
            }
        });
    }
    getNextQuote();

    $("#nextQuote").on("click", function (event) {
        event.preventDefault();
       getNextQuote();
    });

    $("#share").on("click", function (event) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '--' + author));
    });
});