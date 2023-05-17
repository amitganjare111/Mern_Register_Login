const express = require('express');
const router = express.Router();
const User1 = require('../model/user')


router.get('/',(req,res)=> {
    res.send("from router");
});

router.post('/register', async (req, res) => {
    const {name, email , password, cpassword} = req.body;

    if(!name || !email || !password || !cpassword) {
        return res.status(421).json({error:"All Field Required"});
    }
    try{

        const userExist = await User1.findOne({email:email})
  
          if(userExist) 
          {
              return res.status(422).json({error: "Email Already Exist"});
          }
          else if(password != cpassword)
          {
              return res.status(423).json({error: "password must be same"});
          }
          else 
          { 
              const User = new User1({name, email, password});
              await User.save();
              res.status(201).json({message:"save user succesfully"});
          }
  
      } catch(err) { console.log(err) }
  })

//login route
router.post('/login', async (req,res) => {
    
       const { email, password } = req.body;

       if(!email || !password) {
           return res.status(400).json({error:"Please filled the data"})
       }
  try{
    
       const userLogin = await User1.findOne({email:email});
       
     if(userLogin)
       {

           const isMatch = (password==userLogin.password);

            if(!isMatch) 
            {
               res.status(400).json({error:"Invalid Password"});
            }
            else 
            {
              res.setHeader('Content-Type', 'application/json');
              res.json({userLogin});
              console.log("Login Successful");
            }
       }
       else
       {
          return res.json({message:"Invalid Credential"})
       }   
    }

    catch (err) {
        console.log(err);
    }

})

//router.get('/dash',  function (req , res) {
//    User1.find({}).then(function (users) {
//    res.send(users);
//    });
//});

router.get('/dash',  async (req , res) => {
    const users = await User1.find({})
      res.send(users);
  });
  

module.exports = router;