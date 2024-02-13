const express = require('express');
const {connectToMongoDB} = require('./connect');
const urlRouter = require('./routes/url');
const app = express();
const port = 3000;

connectToMongoDB()
    .then(() => {
        console.log('Connected to MongoDB');
    })

app.use(express.json());
app.use('/url', urlRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
