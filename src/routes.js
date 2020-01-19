const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routers = Router();

routers.post('/devs', DevController.store);
routers.get('/devs', DevController.index);
routers.delete('/delete', DevController.destroy);
routers.get('/search', SearchController.index);

module.exports = routers


