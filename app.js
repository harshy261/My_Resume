import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'


// SET TEMPLATE ENGINE
app.set('view engine', 'ejs')

// STATIC FILES
app.use(express.static('public'))

// LOAD ROUTES 
app.use('/', web)

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})

