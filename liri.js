require("dotenv").config();
var axios = require("axios");
var keys = require("./keys");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var command = process.argv[2] 

var command2 = process.argv[3]


function spotifysong(song) { 
    spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
 
  console.log(data); 
  });
}

var moviethis = movie => {
    axios
      .get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
      .then(response => {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("Rating: " + response.data.Rating);
        console.log("imdb Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
      });
  };

  var concertthis = concert => {
    axios
    .get("https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp")
    .then(response => {
        console.log(response.data[1].venue.name);
        console.log(response.data[1].datetime)
        console.log(response.data[1].venue.city)
        console.log(response.data[1].venue.country)
        

    });
  };



  switch(command) {
    case "spotify-this-song":
    spotifysong(command2);
     break;

     case "concert-this":
      concertthis(command2);
     break;

     case "movie-this":
     moviethis(command2);
     break;

     case "do-what-it-says":
     dowhat(command2);
     break;
    


        console.log("Error 404, Please read readme.txt for commands")

  }




  