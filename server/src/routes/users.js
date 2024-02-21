const express = require('express')
const router = express.Router();
const pool = require('../db/db')
router.get('/users',async(req,res)=>{
    try {
        const { rows } = await pool.query('SELECT * FROM test');
        res.json(rows);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
})

module.exports = router;