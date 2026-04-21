import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3000/api/"
})

export const recordCount = async function () {
    const res = await api.get("/count");
    console.log(res)
    return res
}

export const fetchRecords = async function () {
    const res = await api.get("/fetchRecords");
    return res
}