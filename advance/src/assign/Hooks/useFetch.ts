import { useEffect,useState } from "react"
// import { User } from "./Githubs"
import axios from "axios"

export const useFetch=<T>(url:string,params:Record<string,unknown>)=>{
    const [loading,setLoading]=useState(false)
    const [err,setErr]=useState(false)
    const [data,setData]=useState<T[]>([])

    useEffect(()=>{
    axios.get(url,{
        params:{
          ...params
        }
    }).then(({data})=>{
        setLoading(false)
        setData(data.items)
    }).catch(()=>{
        setLoading(false)
        setErr(true)
    })
    
    },[params.q])
    return {
        data,
        err,
        loading
    }
}