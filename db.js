const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function() {

    // Criar a tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS ideas(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         title TEXT,
    //         category TEXT,
    //         description TEXTO,
    //         link TEXT
    //     );
    // `)
    // Deletar um dado da tabela
    // db.run(`DELETE FROM ideas WHERE id = ?`, [7], function(err) {
    //    if (err) return console.log(err)
    
    //    console.log("DELETEI", this)
    // })

    //Consultar dados na tabela
    // db.all(`SELECT * FROM ideas`, function(err, rows) {
    //     if (err) return console.log(err)

    //     console.log(rows)
    // })
})

module.exports = db