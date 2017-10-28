import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import compression from 'compression';

// Initialize express
const app = express();

// Initialize port
const PORT = 3000;

// Compress files
app.use(compression());

// Serve up static files
app.use(express.static(`${process.cwd()}/public`));

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handlebars = require('express-handlebars');

app.set('port', (process.env.PORT || 3000));
app.set('view cache', true);
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`You are listening to port ${PORT}`);
});
