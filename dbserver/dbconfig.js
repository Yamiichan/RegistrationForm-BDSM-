const mysql = require("mysql");

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "bb32586c4eA",
    database: "register_form"
});

module.exports = db;