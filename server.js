let express = require('express');
let handlebars = require('express-handlebars');

let app = express()  
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('App listening on port' + PORT)
})

let routes = require("./app/controller/controller");
app.use(routes);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

