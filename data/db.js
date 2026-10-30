const mysql = require("mysql2");
const config = require("./config");

const pool = mysql.createPool({
    ...config.db,
    waitForConnections: true,
    connectionLimit: 10,
    enableKeepAlive: true
});

pool.getConnection((err, connection) => {
    if (err) {
        console.warn("MySQL bağlantısı kurulamadı:", err.message);
        console.warn("Admin sayfaları veritabanı olmadan boş liste gösterecek.");
        return;
    }
    console.log("MySQL bağlantısı yapıldı.");
    connection.release();
});

module.exports = pool.promise();
