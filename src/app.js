const hbs = require('express-handlebars');
const express = require('express');
const { join } = require('path');
const app = express();

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultView: 'default'
}));

app.set('view engine', 'hbs');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', {
    message: 'Full Stack Development!'
  });
});

app.listen(8080, () => console.log(`live at http://localhost:8080/`));
