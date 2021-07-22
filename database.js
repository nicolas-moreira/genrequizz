const mongoose = require('mongoose');
const config = require('config');

const connectionString = config.get('mongodb.connectionString');
class Database {

    constructor() {
        this.connect();
    }

    connect(){
        mongoose.connect(connectionString)
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