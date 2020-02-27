const express = require('express');
const app = express();
const port = 8082;
const db = require('./db.json');
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/api/', (req, res) => {
    res.json({ message: 'Welcome To Simple Api Hogwarts!' });
});

app.get('/api/version', (req, res) => {
   res.json({ message: 'Version : 0.0.1' });
});

app.get("/api/staff", (req, res) => {
   res.json(db);
});

app.get("/api/staff/:id", (req, res) => {
   const staffId = req.params.id;
   const staff = db.find(_staff   => _staff.id === staffId);

   if (staff) {
      res.json(staff);
   } else {
      res.json({ message: `staff ${staffId} doesn't exist`})
   }
});


app.listen(port, () => console.log(`Hogwarts staff app listening on port ${port}!`))
