const express = require('express');
const router = express.Router();
const { Rewards } = require('../database/database');

/* GET home page. */
router.get('/', function(req, res, next) {

    Rewards.all()
        .then((rows) => {
            res.render('rewards', { title: 'Rewards', rows: rows });
        })

});

module.exports = router;
