const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, '/../db/smreward.db'));

db.serialize(() => {
    db.run(`INSERT INTO users (Name, ComputerName) VALUES ('Ben Boydens', 'Desktop1');`);
    db.run(`INSERT INTO users (Name, ComputerName) VALUES ('John Doe', 'Desktop2');`);


    db.run(`INSERT INTO rewards (Date, UserID, image) VALUES ('2024-01-25 12:00:00', 1, x'012345');`);
    db.run(`INSERT INTO rewards (Date, UserID, image) VALUES ('2024-01-26 12:30:00', 2, x'012345');`);
    db.run(`INSERT INTO rewards (Date, UserID, image) VALUES ('2024-01-27 12:45:00', 1, x'012345');`);
})

db.close()