const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const ProjectRoutes = require("./routes")
const PORT = process.env.PORT || 4040;

const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(success => console.log('DB connected successfully!'))
.catch(error => console.log('error connecting to database', error))

app.use(cors())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "../dist")))

app.use("/api", ProjectRoutes);

app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"))
})

app.listen(PORT, () => console.log(`app is running on port ${PORT}`))

