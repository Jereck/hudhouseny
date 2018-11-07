const   express   = require('express'),
        app       = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/amenities', (req, res) => {
    res.render('amenities');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});