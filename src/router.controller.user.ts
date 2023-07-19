import { Router } from "express"
import { allUser, createUser, deleteUser, findUser } from "./script.controller.user";


const routerUser = Router();

routerUser.get("/", async (req, res) => {
    const { filter } = req.body;
    if(filter == null){
        const users = await allUser();
        res.status(200).send(users);
    }else{
        const users = await findUser(filter)
        .catch((err) => {
            res.status(400).send("not created err: "+err);
        });
        res.status(200).send(users);
    }
});

routerUser.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await createUser(name, email, password)
    .catch((err) => {
        res.status(400).send("not created err: "+err);
    });
    res.status(200).send(newUser);
});

routerUser.delete("/", async (req, res) => {
    const { id, name } = req.body;
    const deletedUser = await deleteUser(id, name)
    .catch((err) => {
        res.status(400).send("not deleted err: "+err);
    });
    res.status(200).send("deleted user");
});

export default routerUser;