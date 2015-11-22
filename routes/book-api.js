var store = require('./books.json');
var fs = require('fs');
var path = require('path')

module.exports = {
    getAll: function (req, res) {
        res.json(store.books);
    },

    get: function (req, res) {
        var book = store.books.filter(function (b) { return b.id === (req.params.id * 1); })[0];

        if (book) {
            res.json(book);
        } else {
            res.status(404);
            res.end();
        }
    },

    save: function (req, res) {
        var body = req.body;

        var book = {
            title: body.title,
            authors: body.authors,
            link: body.link,
            id: store.books.length + 1
        };

        store.books.push(book);

        fs.writeFile(path.join(__dirname, 'books.json'), JSON.stringify(store, null, '    '));

        res.json(book);
    }
};