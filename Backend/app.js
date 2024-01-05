const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());

sequelize.sync().then(() => {
    console.log("Database synced successful.");
    app.listen(3000, () => {
        console.log('app now listening on port 3000')
    })
});
