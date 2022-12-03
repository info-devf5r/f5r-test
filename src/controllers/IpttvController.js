const player = require('../config/iptv-config')


class IptvController {
    getAccountInfo = (req, res) =>{
      player
          .getAccountInfo()
          .then(response => res.json(response))

    }

    getVODInfo = (req, res) => {
        const vodId = req.params.vodId;
        //11927
        player
            .getVODInfo(vodId)
            .then((response) => res.json(response))
    }

    getVODStreamCategories = (req, res) => {
        player
            .getVODStreamCategories()
            .then((response) => res.json(response));
    }


getVODStreams = (req, res) =>{
    const categoryId = req.params.categoryId
    player
        .getVODStreams(categoryId)
        .then((response) => res.json(response)),
         console.log('api/filmes called!');}

getLiveStreams = (req, res) =>{
    const categoryId = req.params.categoryId
    player
        .getLiveStreams(categoryId)
        .then((response) => res.json(response)),
         console.log('api/Lives called!');}
         


getSeries = (req, res) =>{
    const categoryId = req.params.categoryId
    const genero = req.params.genero
    //const query =
    player
        .getSeries(categoryId)
        .then((response) => res.json(response));
         console.log('api/series called!');}



getSeriesCategories = (req, res) => {
        player
            .getSeriesCategories()
            .then((response) => res.json(response));
    } 

getLiveStreamCategory = (req, res) => {
        player
            .getLiveStreamCategory()
            .then((response) => res.json(response));
    } 



getAllEPGLiveStreams = (req, res) =>{
    const id = req.params.id;
    player
        .getAllEPGLiveStreams(id)
        .then((response) => res.json(response));
      
}
        


}

module.exports = new IptvController()