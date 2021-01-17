const express = require('express')
const { route } = require('../app.js')
const router = express.Router()
const bcrypt = require('bcrypt')
const { Client } = require('pg')

module.exports = router