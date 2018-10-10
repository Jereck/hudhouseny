const   express   = require('express'),
        app       = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/amenities', (req, res) => {
    res.render('amenities');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});