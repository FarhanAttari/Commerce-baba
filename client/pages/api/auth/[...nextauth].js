import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../.../../../../Schema/UserSchema';
import bcrypt from 'bcryptjs';
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import db from "../../../../dbConfig"
// import  db from '../../../DataBass/db' 
export default NextAuth ({
    // session :{
    //     strategy :"jwt"
    // },
    providers:[
     
            // FacebookProvider({
            //   clientId: process.env.FACEBOOK_CLIENT_ID,
            //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET
            // }),
        
        GoogleProvider({
            clientId:"111110153561-6p1g2pgkq70lj3q1e315cq462u0g8mqm.apps.googleusercontent.com",
            clientSecret: "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",
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
          }),
        CredentialsProvider({
            async authorize(credentials,req){
                console.log(credentials)
        db.connect()

                const {email ,password}=credentials;
                const user =await User.findOne({email:email})
                if(!user){
                    throw new Error("Invaild Email Or Password")
                }
                const isPasswordMatch=await bcrypt.compare(password,user.password)

if(!isPasswordMatch){
    throw new Error("Invaild Email Or Password")
}

return user;

            }
        })
    ],
    pages:{
        signOut: "/auth/signout",
signIn:"/login"
    },
JWT:"e9ab97522c6ecb1f86c664b06a0ca87f"

    // secret:"alo"
    // secret:process.env.JWT


})








// GoogleProvider({
//     clientId: "your-google-client-id",
//     clientSecret: "your-google-client-secret",
//     authorization: {
//       params: {
//         prompt: "consent",
//         access_type: "offline",
//         response_type: "code"
//       }
//     },
//     async profile(profile, tokens) {
//       // Log the user object when the user logs in with Google
//       console.log('User logged in with Google:', profile);
  
//       return {
//         id: profile.id,
//         email: profile.email,
//         name: profile.name,
//         image: profile.picture,
//         tokens: { accessToken: tokens.accessToken, idToken: tokens.idToken }
//       };
//     }
//   })
  