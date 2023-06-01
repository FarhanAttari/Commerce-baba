
const User = require("../../../models/user");
import connectDB from "../../../dbConfig/db";
// ../../Schema/UserSchema
// ../../DataBass/db
connectDB()
export default async (req, res) => {
  
        try {
                const { email, password, role } = req.body;
        
                const user = await User.findOne({ email });
                if (user) {
                    res.json({ message: 'User already exists' });
                } else {
                                const {email,password}=req.body


                    const signupData = new  User  ({email,password})
                    await signupData.save();
                    res.json({ message: 'User created successfully' });
                }
            } catch (error) {
                res.status(500).json({ message: 'Server error' });
            }
                
};


// import connectDB from "../../../dbConfig/db";
// import User from "../../../models/user";

// console.log(User);
// connectDB();
// export default async (req, res) => {
//     try {
//         const { email, password, role } = req.body;

//         const user = await User.findOne({ email });
//         if (user) {
//             res.json({ message: 'User already exists' });
//         } else {
//             const signupData = new User(req.body);
//             await signupData.save();
//             res.json({ message: 'User created successfully' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };






// let connectDB  = require("../../../dbConfig/db");
// let User  = require("../../../models/user");


// connectDB();

// export default async (req, res) => {

//   try{
 
//       const user = await User.findOne({ email: req.body.email });
//       if (user) {
//         res.json({ message: 'User already exists' });
//       } else {
//         const signupdata = new User(req.body);
//         console.log(signupdata)
//         await signupdata.save();
//         res.json({ message: 'User created successfully' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: 'Server error' });
//     }
  
      //   console.log(req.body)
      //   const { email, password } = req.body
      //   const user = new User({ email, password })
      //   await user.save()

      //   console.log(user);

      //   res.status(201).json({ success:true})
      // }catch(e){
      //   console.log(e.message )
      // }

// }





// import connectDB from "../../../dbConfig/db";
// import users from "../../../models/user";

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email, password, role } = req.body;
// console.log(req.body);
//     try {
//       connectDB.connect();
//       const user = users({ email, password, role });
//       await user.save();

//       console.log("databass wala code" ,user);
//       res.status(201).json({ user });
//     } 
    
//     catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
