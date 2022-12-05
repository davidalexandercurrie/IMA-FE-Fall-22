import axios from 'axios';
import express from 'express';
const app = express();
app.use(express.static('public'));

const port = 8080;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.get('/', (req, res) => {
  axios
    .get('https://rickandmortyapi.com/api/character/1')
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});
