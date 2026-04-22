import { recordCount, recordFetch } from "../service/fetch.service.js"
import { useDispatch, useSelector } from 'react-redux'
import { setCount, setLoading, setRecords, setTotal } from "../state/fetch.slice.js"


export const useFetch = () => {
    const record = useSelector(state => state.fetch.records)
    const dispatch = useDispatch()

    async function fetchCount() {
        dispatch(setLoading(true))
        const res = await recordCount()
        dispatch(setTotal(res.data.count))
        dispatch(setLoading(false))
    }

    async function fetchRecords() {
        dispatch(setLoading(true))
        const res = await recordFetch(record[record.length - 1]?._id)
        dispatch(setRecords(res.data.records))
        dispatch(setCount(res.data.records.length))
        dispatch(setLoading(false))
    }

    return { fetchCount, fetchRecords }
}