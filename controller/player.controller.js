const playerServise = require('../servise/player.service');

module.exports = {
    readPlayers: (req, res) => {
        const dataJson = playerServise.readPlayers();

        res.render('players', { dataJson });
    },
    createPlayer: (req, res) => {
        playerServise.createPlayer(req.body);
        playerServise.saveLogin(req.body);

        res.redirect('http://localhost:8008/players');
    },
    editPlayer: (req, res) => {
        const { id } = req.params;
        const elem = playerServise.getPlayerByID(id);

        res.render('edit', { elem });
    },
    savePlayer: (req, res) => {
        const { id } = req.params;
        playerServise.savePlayer(req.body, id);

        res.redirect('http://localhost:8008/players');
    },
};
