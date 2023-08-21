const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('response from Product add')
});

// getall
router.get('/getall', (req, res) => {
    res.send('response product getall')
});

// getbyid
router.get('/getbyid', (req, res) => {
    res.send('response product getbyid')
});

module.exports = router;