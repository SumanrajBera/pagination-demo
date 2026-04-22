import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/api/"
})

export const recordCount = async function () {
    const res = await api.get("/count");
    return res
}

export const recordFetch = async function (gt) {
    const res = await api.post("/fetchRecords", { gt });
    return res
}