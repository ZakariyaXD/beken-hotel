const express = require('express');
const cors = require('cors');
const db = require('./app/models');

const app = express();

const corsOption = {
    origin: '*'
};

// reg. cors middleware
app.use(cors(corsOption));
app.use(express.json());

//db
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log(`Database Connected!`))
    .catch(err => {
        console.log(`Cannot Connected to Database!`);
        process.exit();
    });

//routes
require('./app/routes/pelanggan.routes')(app)

//port
const port = 3000
app.listen(port, () => console.log(`server up with port ${port}`));