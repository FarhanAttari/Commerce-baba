const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
// const { createServer } = require('http');
// const { parse } = require('url');
const next = require('next');
const connectDB = require('./dbConfig/db');

const dev = true;
// const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config({ path: path.resolve(__dirname, '.env') });
const PORT = process.env.PORT || 5000;

app.prepare().then(() => {

  const server = express();

  server.use(express.json());

  // const UserRoute = require('./routes/User');
  // const ProductRoute = require('./routes/Product');
  // const StoreRoute = require('./routes/Store');
  // const OrderRoute = require('./routes/Order');

  // server.use('/user', UserRoute);
  // server.use('/product', ProductRoute);
  // server.use('/store', StoreRoute);
  // server.use('/order', OrderRoute);

//   server.use(express.static(path.join(__dirname, "./client/next")));

  server.all('*', (req, res) => {
    return handle(req, res);
  });


connectDB().then(() => {
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running at ${PORT}`);
  });
});

}).catch((error) => {
  console.error('An error occurred while preparing the Next.js app:', error);
  process.exit(1);
});

