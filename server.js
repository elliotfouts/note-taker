// import requried modules
const express = require('express');
const mongoose = require('mongoose');
const htmlRoutes = require('./controller/htmlRoutes');
const apiRoutes = require('./controller/apiRoutes');
// instantiate express
const app = express();
// set port number
const PORT = process.env.PORT || 8090;
// configure the express app to serve static files and to handle data decoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/noteTaker', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
// routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
