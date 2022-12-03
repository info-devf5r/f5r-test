const iptvController = require('./src/controllers/IpttvController');
const app = require('./src/config/server-config');



app.get('/api/filme/info/:vodId', iptvController.getVODInfo);
app.get('/api/filmes/categorias',iptvController.getVODStreamCategories);
app.get('/api/series/categorias',iptvController.getSeriesCategories);
app.get('/api/lives/categorias', iptvController.getLiveStreamCategory);


app.get('/api/lives', iptvController.getLiveStreams);
app.get('/api/Usuario', iptvController.getAccountInfo);
app.get('/api/filmes', iptvController.getVODStreams);
app.get('/api/filmes/:categoryId', iptvController.getVODStreams);
app.get('/api/series', iptvController.getSeries);
app.get('/api/series/genero/:genero', iptvController.getSeries);
app.get('/api/series/:categoryId', iptvController.getSeries);
app.get('/api/test/:id', iptvController.getAllEPGLiveStreams);


