const express = require('express')
const { route } = require('../app.js')
const router = express.Router()
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const nodemailer = require('nodemailer')
const sendmail = require('sendmail')()

router.post('/email', async (req, res) => {
  const fullname = req.body.fullname
  const email = req.body.email
  const subject = req.subject
  const text = req.text
  const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'windows',
    path: ''
  })
  const result = await transporter.sendMail({
    from: 'test@gmail.com',
    to: 'alexis.lecuyer@noos.fr',
    subject: 'test',
    text: 'test'
  }, (err) => {
      console.log(err)
  })
  res.json({ message: 'Done !' })
})

module.exports = router