const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const users = [];

app.post('/', function (req, res) {
    const{ms,user}=req.body;
    setTimeout(() => {
        users.push(user);
        res.json(users)
    }, ms)

});

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
