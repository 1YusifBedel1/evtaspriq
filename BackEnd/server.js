const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
const port=5000
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
const Products = mongoose.model("Product", productSchema)

app.get("/products", async (req, res) => {
    const response = await Products.find()
    res.send(response)
})
app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    const target = await Products.findById(id)
    res.send(target)
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params
    await Products.findByIdAndDelete(id)
    res.send("item deleted")
})

app.post("/products", async (req, res) => {
    const { title, price, image } = req.body
    const newProd = new Products({ title: title, price: price, image: image })
    await newProd.save()
    res.status(201).send("item created")
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params
    const { title, price, image } = req.body
    await Products.findByIdAndUpdate(id, { ...req.body })
    res.send("item updated")
})
mongoose.connect("mongodb+srv://Yusif:Bedel@cluster0.ct5lqxj.mongodb.net/").then(res => {
    console.log("db connected")})
app.listen(port, (req, res) => {
    console.log("api running on 5000")
})