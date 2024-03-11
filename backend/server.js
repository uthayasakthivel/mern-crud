import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()
dotenv.config()
const port = process.env.PORT || 5000

// app.get("/", (req, res) => {
//   res.write("Hello there !")
//   res.end()
// })

mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("Database connected")
    app.listen(port, () => {
      console.log(`Connected to backend, running at ${port}`)
    })
  })
  .catch((error) => {
    console.error("Error connecting to database:", error)
  })
