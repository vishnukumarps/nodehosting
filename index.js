const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/api/v1/users', (req, res, next) => {
    console.log('users')

    res.send('Done');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))