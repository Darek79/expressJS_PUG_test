const express = require('express');
const app = express();

app.set('view engine','pug');


var path = require('path');
const helmet = require('helmet');
const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());

app.use(express.static(path.join(__dirname+'/public')));


app.use('/admin',admin);
app.use(shop);

app.use((req,res)=>{
    res.status(404).render('404')
})

app.listen(3000, () => {
    console.log('server is up');
})