const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const userPostRoutes = require('./routes/userPostRoutes')
const postCommentRoutes = require('./routes/postCommentRoutes')
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", userRoutes);
app.use("/", userPostRoutes);
app.use("/", postCommentRoutes);

sequelize.sync().then(() => {
    console.log("Database synced successful.");
    app.listen(3000, () => {
        console.log('app now listening on port 3000')
    });
});
