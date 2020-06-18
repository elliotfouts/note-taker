// import requried modules
const express = require('express');
const mongoose = require('mongoose');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// instantiate express
const app = express();
// set port number
const PORT = process.env.PORT || 8090;
// configure the express app to serve static files and to handle data decoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// connect to mongo
mongoose.connect('mongodb://localhost/noteTaker', { useNewUrlParser: true })
  .catch((error) => console.log(error));
// routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at PORT: ${PORT}`);
});
