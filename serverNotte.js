var express = require("express")
var app = express()
var fs = require("fs")
var cors = require("cors")
var bodyParser = require("body-parser")

var mysql = require("mysql")
const { hostname } = require("os")
var conn = mysql.createConnection({
    host: "sql11.freesqldatabase.com",
    user: "sql11645792",
    password: "Xx9snVc4TU",
    database: "sql11645792",
    hostname: "0.0.0.0"
})


app.use(
    cors({
        origin: "*"
    })
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.get("/getAllPersone", function (req, res) {
    conn.query("SELECT nome FROM persone", function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Errore nel server" });
        } else {
            console.log(result);
            res.send(result); 
        }
    });
});


var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("server is running")
})