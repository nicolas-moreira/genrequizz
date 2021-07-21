const mongoose = require('mongoose');

class Database {

    constructor() {
        this.connect();
    }

    connect(){
        mongoose.connect("mongodb+srv://")
        .then(() => {
            console.log("Connected successfully to the database");
        })
        .catch((err) => {
        console.log("Error while connecting to the database", err)
        }
        );
    }
}

module.exports = new Database();