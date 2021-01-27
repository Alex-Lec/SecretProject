const express = require('express')
const { route } = require('../app.js')
const router = express.Router()
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const nodemailer = require('nodemailer')

router.post('/email', async (req, res) => {
  const fullname = req.body.fullname
  const email = req.body.email
  const subject = req.body.subject
  const text = req.body.text
  console.log(fullname + " " + email + " " + subject + " " + text)
  const transporter = nodemailer.createTransport({
    host: 'smtps.numericable.fr',
    port: 465,
    secure: true,
    auth: {
      user: 'alexis.lecuyer@noos.fr',
      pass: 'potter'
    }
  })
  const result = await transporter.sendMail({
    from: 'alexis.lecuyer@noos.fr',
    to: 'alexis.lecuyer14@gmail.com',
    subject: subject,
    text: 'De : ' + email + '\n' + 'Object : ' + subject + '\n' + 'Message : ' + text,
  }, (err) => {
      console.log(err)
  })
  res.json({ message: 'Done !' })
})

module.exports = router