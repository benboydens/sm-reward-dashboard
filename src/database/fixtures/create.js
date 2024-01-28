const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, '/../db/smreward.db'));

db.serialize(() => {
    db.run(`
        CREATE TABLE users (
            ID INTEGER PRIMARY KEY,
            name TEXT,
            computerName TEXT
        );`
    ).run(`
        CREATE TABLE rewards (
            ID INTEGER PRIMARY KEY,
            date TEXT,
            userID INTEGER,
            image BLOB,
            FOREIGN KEY (UserID) REFERENCES users(ID)
        );`
    );
})

db.close()