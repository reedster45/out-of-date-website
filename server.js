const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});