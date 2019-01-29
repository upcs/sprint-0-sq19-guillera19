var sum = sum(3,4);
document.getElementById("header1").innerHTML = "The sum of 3 and 4 is: " + sum;

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express();

app.engine('.hbs', exphbs({
                          defaultLayout: 'main',
                          extname: '.hbs',
                          layoutsDir: path.join(__dirname, 'css')
                          }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

