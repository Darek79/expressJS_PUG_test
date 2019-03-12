const fs = require('fs');
const path = require('path');
const p = path.join(path.resolve('data'), 'items.json');



module.exports = class Product {
    constructor(t) {
        this.title = t;

    }

     save() {
       
            fs.readFile(p, (err, data) => {
                let items = [];
                if(data.length === 0 ){
                    items.push(this);
                   return fs.writeFile(p, JSON.stringify(items),err =>{
                    console.log(err);
                });
                } else if (!err || data.length > 0){
                    items = JSON.parse(data);
                }
                
                items.push(this);
                fs.writeFile(p, JSON.stringify(items),err =>{
                    console.log(err);
                });
            })
        

         
    };


    static fetchAll(cb) {
   
         fs.readFile(p,'utf8', (err, data) => {
            if (err) {
                cb([]);
            } else if(data === ''){
                cb([]);   
            }else {
                cb(JSON.parse(data));
            }
           
        })
    }













}