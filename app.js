const express = require('express')
const path = require('path');
const app = express()
const port = 3000


// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));


// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/random', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/random.html'));
})


app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`)
})