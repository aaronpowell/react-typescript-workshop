var store = require('./books.json');

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
    }
};