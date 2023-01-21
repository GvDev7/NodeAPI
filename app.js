const express = require('express');
const app = express();
const port = process.env.PORT || 3306;

app.get('/', (req, res) => {
    res.send('Hello from GVDev')
})

app.get('/api/:year/:month', (req, res) => {
    res.send(req.params);
})

app.listen(port, () => console.log(`Listening on port ${port}`))