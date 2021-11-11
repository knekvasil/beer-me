// app.js
const express = require('express')
const axios = require('axios');
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.get('/random', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/random.html'));

    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => {
        drinkStore = {}
        drink = response.data.drinks[0]
        drinkStore["name"] = drink.strDrink
        drinkStore["category"] = drink.strCategory
        drinkStore["instructions"] = drink.strInstructions
        drinkStore["img"] = drink.strDrinkThumb
        ingredientsStore = {}
        for (let i = 1; i < 15; i++){
            ingredientsStore[drink[`strIngredient${i}`]] = drink[`strMeasure${i}`]
            
        }
        drinkStore["ingredients"] = ingredientsStore
        console.log(drinkStore)
    })
    .catch((error) => console.log(error))
})


app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`)
})