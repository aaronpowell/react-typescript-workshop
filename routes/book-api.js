var store = require('./books.json');

module.exports = {
    getAll: function (req, res) {
        res.json(store.books);
    }
};