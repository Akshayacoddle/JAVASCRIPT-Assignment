// studentModel.js
const con = require("../config/connection");

const createUser = (rollNumber, firstName, lastName, dateOfBirth, gender, aadharNumber, nationality, caste, mobile, address, pinCode) => {
    // Ensure that rollNumber is treated as a number, use placeholders
    const sqlQuery = `INSERT INTO student (roll_number, first_name, last_name, date_of_birth, gender, aadhar_number, nationality, caste, mobile, address, pin_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    // Use conn.query correctly
    con.query(sqlQuery, [rollNumber, firstName, lastName, dateOfBirth, gender, aadharNumber, nationality, caste, mobile, address, pinCode], (err, result) => {
        if (err) {
            console.error("SQL Error:", err);
            // Handle error
        } else {
            console.log("Insertion Result:", result);
            // Handle success
        }
    });
};

module.exports = { createUser };
