const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(process.env.PORT, function(){
    console.log('Server is running on 3000');
})