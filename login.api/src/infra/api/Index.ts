import express from "express";
import userRoutes from "./routes/UserRoutes";

const app = express();

app.use("/users", userRoutes);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.listen(3001, () => {
    console.log("Server is listening at 3001");
})