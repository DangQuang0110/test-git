const express = require ('express');
const path = require('path');
const app = express();

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});//  load  files html

app.get('/api/users',(req, res) =>{
    const users =[{
        id: '123',
        name: 'quang',
    
    },{
        id: '234',
        name:'quang2',

    },{
        id: '345',
        name: 'bob',
    }];
    res.json(users);
});

app.listen(8080, () =>{
    console.log('Server is listening on port 8080');
});