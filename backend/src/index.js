import { app } from "./app.js"
import { connectDb } from "./db/connection.js"


connectDb().then(() => {
    app.listen(process.env.PORT | 8000, (err) => {
        console.log("server started listening======> Port: ", process.env.PORT | 8000)
    })
}).catch((err) => {
    console.log("Faild to start server : ", err)
})



