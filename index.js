const express = require('express');
const app = express();
const port = 8081;
const db = require('./db.json');
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/api/', (req, res) => {
    res.json({ message: 'Welcome To Simple Api Hogwarts!' });
});

app.get('/api/version', (req, res) => {
   res.json({ message: 'Version : 0.0.6' });
});

app.get("/api/houses", (req, res) => {
   res.json(db);
});

app.get("/api/houses/:id", (req, res) => {
   const housesId = req.params.id;
   const houses = db.find(_houses => _houses.id === housesId);

   if (houses) {
      res.json(houses);
   } else {
      res.json({ message: `houses ${housesId} doesn't exist`})
   }
});


app.listen(port, () => console.log(`Hogwarts app listening on port ${port}!`))
