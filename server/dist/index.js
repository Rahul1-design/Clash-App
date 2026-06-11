import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 7000;
app.get("/", (req, res) => {
    return res.send("We are officially starting the server!!!");
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
// ! In package.json
// start: command starts the server in which the typescript that has been compiled as js in dist folder.
// server: command watched the compiled js in dist and restart the server to make sure to update the any changes .
// watch: command watches if there is any changes in the typescript so that it can compile it into the js.
// build: command converts the typescript into js
