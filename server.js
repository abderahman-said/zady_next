const next = require('next') 
const http = require('http') 
  const hostName = "egy-home.net"
  const port = 3016
const app = next({dev: process.env.NODE_ENV !== 'production'} , hostName , port) 
  
app.prepare().then(() => { 
 const server = http.createServer((req, res) => { 
   // Handle API routes 
   if (req.url.startsWith('/api')) { 
     // Your API handling logic here 
   } else { 
     // Handle Next.js routes 
     return app.getRequestHandler()(req, res) 
   } 
 }) 
 server.listen(port, (err) => { 
   if (err) throw err 
   console.log(`> Ready on http://${hostName}:${port}`) 
 }) 
})