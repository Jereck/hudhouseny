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

app.get('/photos', (req, res) => {
    var images = [
        {url: '/images/house/Set001.jpg', alt: 'Image'},
        {url: '/images/house/Set006.jpg', alt: 'Image'},
        {url: '/images/house/Set004.jpg', alt: 'Image'},
        {url: '/images/house/Set007.jpg', alt: 'Image'},
        {url: '/images/house/Set010.jpg', alt: 'Image'},
        {url: '/images/house/Set012.jpg', alt: 'Image'},
        {url: '/images/house/Set014.jpg', alt: 'Image'},
        {url: '/images/house/Set017.jpg', alt: 'Image'},
        {url: '/images/house/Set018.jpg', alt: 'Image'},
        {url: '/images/house/Set022.jpg', alt: 'Image'},
        {url: '/images/house/Set029.jpg', alt: 'Image'},
        {url: '/images/house/Set034.jpg', alt: 'Image'},
        {url: '/images/house/Set036.jpg', alt: 'Image'},
        {url: '/images/house/Set038.jpg', alt: 'Image'},
        {url: '/images/house/Set041.jpg', alt: 'Image'},
        {url: '/images/house/Set043.jpg', alt: 'Image'},
        {url: '/images/house/Set045.jpg', alt: 'Image'},
        {url: '/images/house/Set050.jpg', alt: 'Image'},
        {url: '/images/house/Set051.jpg', alt: 'Image'},
        {url: '/images/house/Set056.jpg', alt: 'Image'},
        {url: '/images/house/Set057.jpg', alt: 'Image'},
        {url: '/images/house/Set061.jpg', alt: 'Image'},
        {url: '/images/house/Set062.jpg', alt: 'Image'},
        {url: '/images/house/Set065.jpg', alt: 'Image'},
        {url: '/images/house/Set068.jpg', alt: 'Image'},
        {url: '/images/house/Set070.jpg', alt: 'Image'},
        {url: '/images/house/Set073.jpg', alt: 'Image'},
        {url: '/images/house/Set074.jpg', alt: 'Image'},
        {url: '/images/house/Set077.jpg', alt: 'Image'},
        {url: '/images/house/Set079.jpg', alt: 'Image'},
        {url: '/images/house/Set084.jpg', alt: 'Image'},
        {url: '/images/house/Set085.jpg', alt: 'Image'},
        {url: '/images/house/Set087.jpg', alt: 'Image'},
        {url: '/images/house/Set089.jpg', alt: 'Image'},
        {url: '/images/house/Set090.jpg', alt: 'Image'},
        {url: '/images/house/Set092.jpg', alt: 'Image'},
        {url: '/images/house/Set098.jpg', alt: 'Image'},
        {url: '/images/house/Set102.jpg', alt: 'Image'},
        {url: '/images/house/Set104.jpg', alt: 'Image'},
        {url: '/images/house/Set105.jpg', alt: 'Image'},
        {url: '/images/house/Set108.jpg', alt: 'Image'},
        {url: '/images/house/Set110.jpg', alt: 'Image'},
        {url: '/images/house/Set114.jpg', alt: 'Image'},
        {url: '/images/house/Set115.jpg', alt: 'Image'},
        {url: '/images/house/Set116.jpg', alt: 'Image'},
        {url: '/images/house/Set119.jpg', alt: 'Image'},
        {url: '/images/house/Set120.jpg', alt: 'Image'},
    ]
    res.render('photos', {photos: images});
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});