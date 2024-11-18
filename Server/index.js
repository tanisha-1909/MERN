import express from "express"

const app =express(); // app just a variable and store express function

const PORT = 8080; // any value

const names = [
    {
        id: 1,
        name: "Yash1",
    },
    {
        id: 2,
        name: "Yash2",
    },
];

app.get("/names", (req, res) => {
    res.send(names);
})

app.post("/add", (req,res) =>{
    const newName = req.body();
    const dataToAdd = new names(newName);
    dataToAdd.save();
    res.send(names);
})

app.delete("/delete/:id", (req,res) =>{
    const idToDelete = req.params.id;
    names.findByIdAndDelete({ idToDelete });
    res.send(names);
})

// app.listen(PORT, () => {
//     console.log("Server Started at port "+ PORT)
// })