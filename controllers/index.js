const router = require('express').Router();

const { User, Product} = require('../models');

router.get('/', async(req, res) => {
    try {
        const userData = await User.findAll();
       return res.status(200).json(userData);
    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
