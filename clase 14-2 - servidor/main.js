import express from 'express'
import http from 'node:http'

// express server
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', 'public/views')
app.use('/static', express.static('public'))

//rutas
app.get('/', (_req, res) => {
  res.render('index')
})

app.use(function(_req, res) {
  res.status(404).render('404');
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ...`);
});
