//* All routes related to club's LOGIN AND REGISTER

const express = require("express");
const Club = require("../models/ClubsSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

//* Route 1  - Club Registration
router.post("/register", async (req, res) => {
    const {name,email,password,address,pincode,description} = req.body;

    //Checks if the inputted field are empty or not
    if(!email || !password || !name || !address || !pincode || !description){
        return res.status(422).json({error:"Please add all the fields"});
    }

    Club.findOne({email:email})
        .then((savedClub)=>{
            //If already club is existing with same email
            if(savedClub){
                return res.json({ exists: true });
            }
            bcrypt.hash(password,12)
            //hashing the password
            .then(hashedpassword=>{                
            const club = new Club({
                email,
                password:hashedpassword,
                name,
                address,
                pincode,
                description
            })
            club.save()//saving the data to db
            .then(club=>{
                return res.json({ sucess: true })       
            })
            .catch(err=>{
                console.log(err);
            })
            })
        })
        .catch(err=>{
            console.log(err);
        })
})

module.exports = router;
