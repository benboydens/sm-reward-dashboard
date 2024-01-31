const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// connect to sqlite db
const db = new sqlite3.Database(path.join(__dirname, '/db/smreward.db'));

const Users = {
    all: () => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM users`, (err, rows) => {

                if (err) {
                    console.log('Errors: ', err);
                    reject(err)
                }
                
                resolve(rows)
            })
        })
    },

    findById: (id) => {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM users WHERE id = ?`, id, (err, row) => {

                if (err) {
                    console.log('Errors: ', err);
                    reject(err)
                }
                
                resolve(row)
            })
        })
    },

    create: (name, computer) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO users (name, computerName) VALUES (?, ?)`, name, computer, (err) => {

                if (err) {
                    console.log('Errors: ', err);
                    reject(err)
                }
                
                resolve()
            })
        })
    }
}


const Rewards = {
    all: () => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM rewards`, (err, rows) => {

                if (err) {
                    console.log('Errors: ', err);
                    reject(err)
                }
                
                resolve(rows)
            })
        })
    },

    
    findById: (id) => {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM rewards WHERE id = ?`, id, (err, row) => {

                if (err) {
                    console.log('Errors: ', err);
                    reject(err)
                }
                
                resolve(row)
            })
        })
    },

    create: (user, screenshot) => {
        return new Promise((resolve, reject) => {

            const curDate = new Date().toISOString();

            db.run(`INSERT INTO rewards (date, userID, image) VALUES (?, ?, ?)`, curDate, user, screenshot, (err) => {

                if (err) {
                    console.log('Errors: ', err);
                    reject(err)
                }
                
                resolve()
            })
        })
    }
}

module.exports.Users = Users;
module.exports.Rewards = Rewards;