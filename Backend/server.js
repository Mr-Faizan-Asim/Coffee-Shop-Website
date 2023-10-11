const app = require("./app.js")
require('dotenv').config({path:"Backend/config/config.env"})


const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is at ${process.env.PORT}`)
})



