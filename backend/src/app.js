import express from "express"
import userModel from "./models/user.model.js"

const app = express()
app.use(express.json())

app.get("/api/count", async (req, res) => {
    const count = await userModel.countDocuments();
    return res.status(200).json({
        message: "Fetched Count of records",
        count
    })
})

app.post("/api/fetchRecords", async (req, res) => {
    const { gt } = req.body
    const query = gt ? { _id: { $gt: gt } } : {}
    const limit = 10;
    const records = await userModel.find(query).sort({ _id: 1 }).limit(limit);
    return res.status(200).json({
        message: "Fetched Count of records",
        records
    })
})

export default app;