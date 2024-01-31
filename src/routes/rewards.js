const express = require('express');
const router = express.Router();
const { Rewards } = require('../database/database');

/* GET home page. */
router.get('/', function(req, res, next) {

    Rewards.all()
        .then((rows) => {
            if (req.accepts('html')) {
                res.render('rewards', { title: 'Rewards', rows: rows });
            } else {
                res.json(rows);
            }
        })

});

router.post('/', function(req, res, next) {
    const user = req.body.userID;
    const image = req.body.image;

    Rewards.create(user, image)
        .then(() => {
            res.json({
                'success': true
            })
        })
        .catch(() => {
            res.json({
                'success': false
            })
        })
});

module.exports = router;
