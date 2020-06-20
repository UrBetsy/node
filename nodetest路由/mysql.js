var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: '3306',
    database: 'lfwork',
    user: 'root',
    password: 'Woai0410'
})

connection.connect(function(err) {
    if(err) {
        console.log('与数据库建立连接失败', err)
    } else {
        console.log('与数据库建立连接成功')
    }
})