const mongoose = require('./database');
const Name = require('./schemas/NameSchema');
var fs = require('fs');


var array = fs.readFileSync('./source/names.txt').toString().split("\n");

function addToDatabase() {
    for(i in array) {

        if(/\S/.test(array[i]) && i < 300){
        
            var prenom = array[i].split(" ")[0];
            
            if(prenom != null && prenom != ''){
                Name.create({firstName: prenom.toString()}).then((name) => console.log(name)).catch((err) => console.log(err));
            }
        
        }
    }
}

setTimeout(addToDatabase, 5000);


