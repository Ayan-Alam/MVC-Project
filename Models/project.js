const fs = require('fs');
const path = require('path')
module.exports = class product {
    constructor(t){
        this.title = t
    }
    save(){
        const p = path.join(path.dirname(require.main.filename),'Data','product.json');
        fs.readFile(p,(err,filecontent) => {
            let product = [];
            if(!err){
                product = JSON.parse(filecontent);
            }
            product.push(this);
            fs.writeFile(p,JSON.stringify(product),(err)=>{
                console.log(err);
            });
        })
    }
    static fetchAll(cb){
        const p = path.join(path.dirname(require.main.filename),'Data','product.json');
        fs.readFile(p,(err,filecontent)=>{
            if(err){
                return cb([]);
            }
            cb(JSON.parse(filecontent));
        });
    }
}