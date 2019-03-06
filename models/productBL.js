const fs = require('fs');
const path = require('path');
const p = path.join(path.resolve('data'),'items.json');


module.exports = class Product {
    constructor(t) {
        this.title = t;
        
    }

    static fetchAll() {
        return new Promise((res,rej)=>{
            fs.readFile(p,'utf8',(err,data)=>{
                if(err){
                    
                    throw err;
                } else if (data === ''){
                    return res([]);
                } else {
                    return res(JSON.parse(data));
                };
            });
        });
    };

    save() {
        const items = [];
        Product.fetchAll().then(data=>{
            items = data;
            items.push(this);
            fs.writeFile(p,JSON.stringify(items),err=>{
            if(err) throw err})
        })

    }

    
    
     

  
}


