var client_id = 'id';
var client_secret = 'secret';

//this base encodes your id and secret to pass to the spotify server
var encoded = btoa(client_id + ':' + client_secret);

let token;

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
    token = result.access_token;
    // searchTracks(result.access_token);
  });

function searchTracks(address) {
  fetch(address, {
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
    .catch(() => {
      console.log('Error retrieving spotify API');
    });
}

document
  .getElementById('search')
  .addEventListener('click', () =>
    searchTracks('https://api.spotify.com/v1/tracks/3kW6TmJZY1jLf1PXlLdANt/')
  );
