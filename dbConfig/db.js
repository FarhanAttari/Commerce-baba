// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });
// const mongoose = require('mongoose');
// const DB = 'mongodb://localhost:27017/binnisar'

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(DB);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// }

// module.exports = connectDB;


const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ahmeddehwar2:sadatkhan123123@cluster0.vradxnw.mongodb.net/",

      // "mongodb+srv://aliabdal12345:ali12345@cluster0.eqnxbzr.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;









// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });
// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(
//       "mongodb+srv://ahmeddehwar2:sadatkhan123123@cluster0.vradxnw.mongodb.net/",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

