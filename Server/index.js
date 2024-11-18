import express from "express"

const app =express(); // app just a variable and store express function

const PORT = 8080; // any value

app.listen(PORT, () => {
    console.log("Server Started at port "+ PORT)
})