// studentController.js
const conn = require("../config/connection");
const studentModel = require('../models/studentModel');

const selectData = (req, res) => {
    conn.query("SELECT * FROM student", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
}

const createData = (req, res) => {
    console.log(req.body);
    const { rollNumber, firstName, lastName, dateOfBirth, gender, aadharNumber, nationality, caste, mobile, address, pinCode } = req.body;

    if (!rollNumber || !firstName || !lastName || !dateOfBirth || !gender || !aadharNumber || !nationality || !caste || !mobile || !address || !pinCode) {

        // Correct way to use conn.query and pass data to createUser function
        studentModel.createUser(rollNumber, firstName, lastName, dateOfBirth, gender, aadharNumber, nationality, caste, mobile, address, pinCode);
        res.status(200).send({ message: "Data created successfully" });
    }
}

module.exports = {
    selectData,
    createData
};
