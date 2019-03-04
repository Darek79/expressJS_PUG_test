const express = require('express');
const app = express();

app.set('view engine','pug');


var path = require('path');
const helmet = require('helmet');
const adminRoutes = require('./routes/admin');
const shop = require('./routes/shop');
const badRequest = require('./controllers/error');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());

app.use(express.static(path.join(__dirname+'/public')));


app.use('/admin',adminRoutes);
app.use(shop);

app.use(badRequest.get404);

app.listen(3000, () => {
    console.log('server is up');
})