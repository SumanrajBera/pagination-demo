import { recordCount } from "../service/fetch.service"


export const useFetch = () => {

    async function fetchCount() {
        recordCount
    }

    async function fetchRecords() {
        recordCount
    }

    return { fetchCount, fetchRecords }
}