const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3100;
app.use(cors());

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://DataSorting:DataSorting@datasorting.fglolnr.mongodb.net/suceessTest2', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successful connection to MongoDB');
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err);
  });

const userSchema = require('./UserSchema');

app.get('/skeleton', async (req, res) => {
  try {
    const data = await userSchema.find();
    res.render('index', { data });
  } catch{
    res.send('Internal Server Error');
  }
});

app.post('/skeleton', async (req, res) => {
  try {
    const myObject = req.body;
    const newData = new userSchema(myObject);
    await newData.save();
    res.send('Data saved to database successfully.');
  } catch{
    res.send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
