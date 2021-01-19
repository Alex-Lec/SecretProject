const express = require('express')
const { route } = require('../app.js')
const router = express.Router()
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const nodemailer = require('nodemailer');

router.post('/email', async (req, res) => {
  const fullname = req.body.fullname
  const email = req.body.email
  const subject = req.subject
  const text = req.text
  const transporter = nodemailer.createTransport({
    sendMail: true,
    newline: 'windows',
    logger: false,
    port: 995
  })
  const result = await transporter.sendMail({
    from: 'test@gmail.com',
    to: 'alexis.lecuyer@efrei.net',
    subject: 'test',
    text: 'test'
  }, (err) => {
      console.log(err)
  })
  res.json({ message: 'Email envoyé !' })
})

module.exports = router