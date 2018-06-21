function displayScrape() {
    $.getJSON("/scrape", function (scrape_code) {
        if (scrape_code.code == "success") {
            $.getJSON("/articles", function (data) {
                $("#nyt-0").empty();
                $("#nyt-1").empty();
                $("#nyt-2").empty();
                $("#total-number").text(data.length);
                for (let i = 0; i < data.length; i++) {
                    let mainDiv = $("<div>");
                    mainDiv.addClass("card grey lighten-2");

                    let cardContentDiv = $("<div>");
                    cardContentDiv.addClass("card-content black-text");

                    let spanTitle = $("<span>");
                    spanTitle.addClass("card-title");
                    spanTitle.attr("data-id", data[i]._id);
                    spanTitle.attr("id", "title-" + data[i]._id);
                    spanTitle.text(data[i].title);

                    let p = $("<p>");
                    p.text(data[i].summary);
                    p.attr("id", "summary-" + data[i]._id);
                    cardContentDiv.append(spanTitle);
                    cardContentDiv.append(p);

                    let cardActionDiv = $("<div>");
                    cardActionDiv.addClass("card-action");

                    let a = $("<a>");
                    a.addClass()
                    a.attr("href", data[i].link);
                    a.attr("id", "link-" + data[i]._id);
                    a.text("Go to the article");
                    cardActionDiv.append(a);

                    let saveArticle = $("<a>");
                    saveArticle.addClass("waves-effect waves-light blue btn save-button");
                    saveArticle.attr("id", data[i]._id);
                    saveArticle.text("Save Article");

                    let byline = $("<p>");
                    byline.text(data[i].byline);
                    byline.attr("id", "byline-" + data[i]._id);
                    cardActionDiv.append(byline);
                    // cardActionDiv.append(button);
                    cardActionDiv.append(saveArticle);
                    mainDiv.append(cardContentDiv);
                    mainDiv.append(cardActionDiv);
                    $("#nyt-" + String(i % 3)).append(mainDiv);
                }
            });
        }
   });
}

$(document).ready(function () {
    $('.slider').slider();
    $(".button-collapse").sideNav();
    $('.modal').modal();
});