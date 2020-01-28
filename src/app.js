require("dotenv").config();
require("./db/db");
const express = require("express");
const userRoute = require("./routers/user");

const app = express();

//  Middlewares
app.use(express.json());
app.use("/user", userRoute);

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
	res.send("dne");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
