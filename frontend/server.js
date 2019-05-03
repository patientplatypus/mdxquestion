const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


const path = require('path');
const options = {
  root: path.join(__dirname, '/static'),
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  }
};


app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/home', (req, res) => {
    return app.render(req, res, '/home', req.query)
  })

  // server.get('/archive', (req, res) => {
  //   return app.render(req, res, '/archive', req.query)
  // })

  // server.get('/posts', (req, res) => {
  //   return app.render(req, res, '/posts', req.query)
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})