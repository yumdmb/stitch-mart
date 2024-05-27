const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

// Import required modules
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/User")

// Define routes
app.post('/login', (req, res) => {
    const {userName, password} = req.body;
    UserModel.findOne({userName: userName})
    .then(users => {
        if(users) {
            if (users.password === password) {
                res.json("Success")
            } else {
                res.json("Incorrect Password")
            }
        } else {
            res.json("User Not Found")
        }
    })
    .catch(err => res.json({ status: "Error", error: err }));
})

app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})