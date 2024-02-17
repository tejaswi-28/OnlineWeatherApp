const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000

// public static path
const static_path = path.join(__dirname,"../public");
const tmeplate_path = path.join(__dirname,"../template/views");
const partials_path = path.join(__dirname,"../template/partials");

app.set('view engine', 'hbs');
app.set('views', tmeplate_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path)) 
 
// routing
app.get('/', (req, res) => {
  res.render('index')
})
 
app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/weather', (req, res) => {
  res.render('weather')
})

app.get('/*', (req, res) => {
  res.render('404error',{
    errorMsg: 'Oops! Page not Found.'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})