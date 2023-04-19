const express = require('express');
const app = express();
const cors = require('cors');
const startDB = require('./config/db')

const PORT = 3001;


app.use(cors());
app.use(express.json());
app.use('/auth', require('./routes/auth'));
app.use('/translations', require('./routes/translations'));


app.listen(PORT, () => {
  startDB()
  console.log(`listening on http://localhost:${PORT}`); // eslint-disable-line no-console
});