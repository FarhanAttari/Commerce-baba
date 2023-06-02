let express = require('express');
let router = express.Router();
let User = require('../models/user');
let jsonwebtoken = require('jsonwebtoken');
let Token = require('../models/token');
let sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');


router.post('/signup', async (req, res) => {

    try {
        console.log(req.body);
        let user = new User(req.body);
        // console.log(req.body);
        let userEmail = await User.findOne({ email: req.body.email });
        if (userEmail) {
            res.send("User Already Exists");
        }
        else {
            await user.save();

            const token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString('hex')
            }).save();
            console.log(token.token);
            const url = `${process.env.BASE_URL}users/${user._id}/verify`;
            console.log(url);
            console.log(user.email);
            await sendEmail(user.email, "Verify Email", url);

            await res.send({ message: "An Email has been Sent to Your Email Address Please Verify" });

        }
    }

    catch (error) {
        res.send({ message: "internal Server Error" });
        console.log(error.message)
    }
})


router.get('/:id/verify', async (req, res) => {

    try {
        const user = await User.findOne({ _id: req.params.id });
        console.log(user);
       
        if (!user) {
            res.send({ message: "Invalid Link" });
        }
        else{
        await User.findByIdAndUpdate(user._id, { verified: true });
    
        res.send({ message: "Email Verified Successfully" });
        }
    }

    catch (error) {
        console.log(error)
        res.send({ message: "internal Server Error" });
    }
})



router.post('/login', async (req, res) => {
    console.log(req.body)
    try {
        let userEmail = await User.findOne({ email: req.body.email });
        let userPassword = await User.findOne({ password: req.body.password });
        console.log(userEmail)
        console.log(userPassword)
        if (!userEmail || !userPassword) {
          return res.send({ message: "Invalid Email or password" });
        }
        let user = await User.findOne(req.body).lean();
        console.log(user);
        console.log(user.verified);
        if (user.verified === false) {
            let token = await Token.findOne({ userId: user._id });
            // console.log(token);
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex"),
                }).save();
                const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
                console.log(url);
                await sendEmail(user.email, "Verify Email", url);
                res.send({ message: "An Email sent to your account please verify" })
            } else if (token) {
              res.send({ message: "An Email sent to your account please verify" });
            }
        }

        if (user.verified === true) {

            jsonwebtoken.sign({
                id: user._id
            }, "FSD m cat says mioon", {
                expiresIn: "12h"
            }, (err, UserToken) => {
                res.json({
                    utoken: UserToken,
                    user: user,
                    message:"Login Successfully"
                    
                });
            })
            // res.send({ message: "Logged in Successfully" })
        }
    }

    catch (error) {
        console.log(error.message)
    }
});

router.get('/totalUsers',async(req,res)=>{
    try {
        
        let totalUsers = await User.find().countDocuments();
        console.log(totalUsers);
        res.json(totalUsers);
    } catch (error) {
        res.json(error.message);
    }

})
router.get('/',async(req,res)=>{
    try {     
        let users = await User.find();        
        res.json(users);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Server Error');
    }
});
router.get('/session-check-karo', async (req, res)=>{

    try{

        let data = await jsonwebtoken.verify(req.query.token, "FSD m cat says mioon")

        let user = await User.findById(data.id);
        
        res.json(user);
    }catch(e){
        res.json(null);
    }

});

module.exports = router;
