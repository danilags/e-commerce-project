const express = require('express')
const router = express.Router()
const google = require('googleapis')
const googleAuth = require('google-auth-library')
const fs = require('fs')

/* GMAIL API */
function getAuth(cb) {
  fs.readFile('./client_secret.json', (err, data)=> {
    if(err) {
      return cb(err)
    } else {
      let credentials = JSON.parse(data),
          clientSecret = credentials.web.client_secret,
          clientId = credentials.web.client_id,
          redirectUrl = credentials.web.redirect_uris[0],
          auth = new googleAuth(),
          oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl)
      return cb(null, oauth2Client)
    }
  })
}

function sendMail(auth, data, cb) {
  let gmailClass = google.gmail('v1')

  let mails = []

  mails.push('From: "Thank you for buying" <andra.satria1@gmail.com>')
  mails.push(`To: ${data}`)
  mails.push('Content-type: text/html;charset=iso-8859-1')
  mails.push('MIME-Version: 1.0')
  mails.push('Subject: Your checkout list')
  mails.push('')
  mails.push('Thank you for buying from us !')

  let email = mails.join('\r\n').trim(),
      base64 = new Buffer(email).toString('base64')
  base64 = base64.replace(/\+/g, '-').replace(/\//g, '_')

  gmailClass.users.messages.send({
    auth:auth,
    userId: 'me',
    resource: {
      raw: base64
    }
  }, cb())
}

/* GMAIL API ROUTES */
router.get('/mail/auth', (req, res)=> {

  getAuth((err, auth)=> {
    let authUrl = auth.generateAuthUrl({
      access_type: 'offline',
      scope: 'https://www.googleapis.com/auth/gmail.send'
    })
    if(err) {
      console.log('error:', err)
    } else {
      res.redirect(authUrl)
    }
  })
})

/* GOOGLE ROUTE TO GET CODE */
router.get('/mail', (req, res)=> {

  getAuth((err, auth)=> {
    if(err) {
      console.log('---')
      console.log(err)
    } else {
      auth.getToken(req.query.code, (error, token)=> {
        if(error) {
          console.log('===')
          console.log(error)
          res.send(error)
        } else {
          let file = 'gmail-credentials.json'
          fs.writeFile(file, JSON.stringify(token))
          console.log('Created credential file in : ', file)
          // res.redirect('/api/mail/send')
        }
      })
    }
  })
  // res.send(JSON.stringify(req))
})

router.get('/mail/send', (req,res)=> {

  getAuth((err,auth)=> {
    fs.readFile('gmail-credentials.json', (err, token)=> {
      if(err) {
        res.send(err)
      } else {
        auth.credentials = JSON.parse(token)
        sendMail(auth, req.query.email, (err, result)=> {
          if(err) {
            console.log('err : ', err)
          } else {
            console.log('email send')
            console.log(result)
            res.send('success sending email')
          }
        })
      }
    })
  })

})

module.exports = router
