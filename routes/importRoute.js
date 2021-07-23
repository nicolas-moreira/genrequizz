const express = require('express');
const app = express();
const router = express.Router();
const Name = require('../schemas/NameSchema');
const mongoose = require('../database');
const multer = require('multer');
const helpers = require('../helpers/fileFilter');
const path = require('path');
var fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },

    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

router.get("/", async (req,res,next) => {
    res.status(200).render("import");
});

router.post("/", async (req,res,next) => {

    let upload = multer({ storage: storage, fileFilter: helpers.texteFilter }).single('namesList');

    var payload = {
        message: "Prénoms ajoutées",
        color: "green"
    };

    upload(req, res, function(err) {

        if (req.fileValidationError) {
            payload.message = "Format de fichiers accepté : .txt";
            payload.color = "red";
        }
        else if (!req.file) {
            payload.message = "Veuillez sélectionner un fichier";
            payload.color = "red";
        }
        else if (err) {
            payload.message = err;
            payload.color = "red";
        }
        else{
            fs.readFile(req.file.path, (err, data) => {
                if (err) throw err;

                var names = data.toString().split("\n");
                for(i in names) {
                    // 10 = number of lines
                    if(/\S/.test(names[i]) && i < 20){
                        var prenom = names[i].split(" ")[0];
                        if(prenom != null && prenom != ''){
                            Name.create({firstName: prenom.toString()})
                            .catch((err) => console.log(err));
                        }
                    }
                }
              });
              return res.status(200).render("home", payload);
        }

        res.status(200).render("import", payload);
    });
});




module.exports = router;

