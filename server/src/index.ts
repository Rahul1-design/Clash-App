import express, { Application, Response, Request } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const app: Application = express();
const PORT = process.env.PORT || 7000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set a view engine setup
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", async (req: Request, res: Response) => {
  // return res.send("We are officially starting the server😍😍!!!");
  return res.render("Welcome", { name: "Rahul Shrestha" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

// ! In package.json
// start: command starts the server in which the typescript that has been compiled as js in dist folder.
// server: command watches the compiled js in dist and restart the server to make sure to update any changes .
// watch: command watches if there is any changes in the typescript so that it can compile it into the js.
// build: command converts the typescript into js
