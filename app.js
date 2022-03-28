const express = require('express');
const deployconf = express();

const path = require('path');

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    deployconf.use(express.static('build'));
    deployconf.get('*', (req, res) =>{
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

deployconf.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port:', port)
})
 