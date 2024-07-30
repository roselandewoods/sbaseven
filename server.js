// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require ('body-parser')
// const app = express();
// const port = 3000;
// const url = process.env.ATLAS_URI

// // Connect to MongoDB
// mongoose.connect(url);

// app.use('/todo', todoRoutes);

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// // Middleware
// app.use(bodyParser.json());

// // Import Routes
// const itemRoutes = require('./routes/items');
// app.use('/items', itemRoutes);

// // Start server
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });



const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json()); // For parsing application/json

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://roselandewoods:uuVetrLWWd2HVq6B@mongodbpractice.tbnrls4.mongodb.net/BUSYMOM?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.get('/', (req, res) => {
  res.send('<h1>31 THINGS.</h1>');
});

app.get('/api/todo', (req, res) => {
  res.json({ message: 'List of todos' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

