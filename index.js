const express = require('express');
const app = express();
app.use(express.json());

//server info...
const hostname = '127.0.3.1';
const port     = 8000;


//include database connection file
const Createdbconnection = require('./DB/Db.config.js');
Createdbconnection();


//include routes file
const router = require('./Routes/Routes.js');
app.use('/api', router);
app.get('/',(req,res)=>{
    res.send('workimg  fine......')
})

//create server and start
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});