const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from GVDev')
})

app.listen(3306, () => console.log('Listening on port 3306'))