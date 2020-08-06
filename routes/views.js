const path = require('path');
const router = require('express').Router();


router.get('/excercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/excercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;