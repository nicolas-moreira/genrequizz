const mongoose = require('./database');
const Name = require('./schemas/NameSchema');
var fs = require('fs');

var array = fs.readFileSync('./source/names.txt').toString().split("\n");

function addToDatabase() {
    fs.readFile("./source/names.txt", (err, data) => {
        if (err) throw err;

        data = data.toString().split("\n");
        for(i in data) {

            if(/\S/.test(data[i]) && i < 300){
                var prenom = data[i].split(" ")[0];
                if(prenom != null && prenom != ''){
                    Name.create({firstName: prenom.toString()}).catch((err) => console.log(err));
                }
            }
        }
      });
}

setTimeout(addToDatabase, 5000);


