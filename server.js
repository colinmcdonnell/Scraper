var cheerio = require("cheerio");
var request = require("request");

console.log("Grabbing data from nfl.com");

request("http://www.nfl.com/schedules", function(error, response, html) {
  var $ = cheerio.load(html);
  var results = [];
  $("span.team-name.home").each(function(i, element) {
    var title = $(element).text();
    var link = $(element).children().attr("href");
    results.push({
      title: title,
    });
  });
  console.log(results);
})