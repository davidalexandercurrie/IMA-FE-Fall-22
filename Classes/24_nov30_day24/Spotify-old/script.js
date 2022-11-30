//This first ajax call uses my id and secret that I obtained from spotify to get
//an access token that is good for one hour
var id = '340613412d254d5ab2b5be2baab2a5b3';
var secret = 'e8569331e2cb4c268e98b9ebe4377db7';
//this base encodes your id and secret to pass to the spotify server
var encoded = btoa(id + ':' + secret);

fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    Authorization: 'Basic ' + encoded,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  body: 'grant_type=client_credentials',
})
  .then(result => result.json())
  .then(result => {
    //after I get my access token, I use it to search for a spotify track
    searchTracks(result.access_token);
  });

//This is the search to spotify's track api, with the token in an authorization header
function searchTracks(token) {
  fetch('https://api.spotify.com/v1/tracks/3kW6TmJZY1jLf1PXlLdANt', {
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var trackName = data.name;
      var audioElement = document.createElement('audio');
      audioElement.src = data.preview_url;
      audioElement.controls = 'true';
      document.getElementById('title').innerText = trackName;
      document.getElementById('the-track').append(audioElement);
    })
    .catch(() => console.log('Error retrieving spotify API'));
}
