import Express from "express";
import Cars from "./cars.js"
import Cors from "cors";



const app = Express();
const port = 9000;
app.use(Cors({
    origin: '*'
}));

app.get("/cars", (req, res)=> {
    console.log('OK')
    res.send(Cars)
})

app.get("/cars/:id", (req, res)=> {
    const result = Cars.find((car) => {
        return + req.params.id === car.id
    })
    res.send([result])
})

app.listen(port, () => console.log("listening on port " + port))