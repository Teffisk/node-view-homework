var express = require('express');

app = express();

app.get('/', function(req, res) {
	res.sendFile('/Users/brad.mcknight91/wdi/unit2/node-view-app/index.html');
});

app.get('/about', function(req, res) {
	res.sendFile('/Users/brad.mcknight91/wdi/unit2/node-view-app/about.html');
});

app.get('/blog', function(req, res) {
	res.sendFile('/Users/brad.mcknight91/wdi/unit2/node-view-app/blog-directory.html');
})

app.listen(8000);