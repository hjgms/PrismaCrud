import express from "express"
import routerUser from "./router.controller.user";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use("/user", routerUser);

app.listen(5000);