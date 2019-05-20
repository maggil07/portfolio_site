const express = require('express')
const app = express()
const path = require("path"); // window or mac
const router = express.Router();
const port = 3000


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
})

// router.get('/css', (req, res) => {
//     res.sendFile(path.join(__dirname, '/styles.css'));
// })
//
// router.get('/img', (req, res) => {
//     res.sendFile(path.join(__dirname, '/images'))
// })

app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('images/logos'));



app.listen(port, () => console.log(`app listening on port ${port}!`))

app.use('/', router);
