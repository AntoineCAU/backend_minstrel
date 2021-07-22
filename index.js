const express = require('express');
const { backPort } = require('./conf');

const app = express();
const contactRoutes = require('./routes/contactform');

app.use(express.json());
app.use('/contact', contactRoutes);

app.listen(backPort, () => {
  console.log(`API root available at: http://localhost:${backPort}/`);
});
