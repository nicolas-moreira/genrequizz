const config = require('config');
const express = require('express');
const app = express();
const port = config.get('express.port');
const path = require('path');
const mongoose = require('./database');
const server = app.listen(port, () => console.log('Server listening on port', port));

app.set('view engine', 'pug');
app.set('views','views');

app.use(express.static(path.join(__dirname, "public")));

const newNameRoute = require('./routes/newName');

app.use("/newName", newNameRoute);

app.get("/", (req,res,next) => {
    res.status(200).render("home");
});