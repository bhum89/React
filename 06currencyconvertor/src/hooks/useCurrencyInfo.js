// method->return value->return array ke andar ek variable ,aur ek function hoga it is hook

import {useEffect,useState} from "react"


function useCurrencyInfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
    fetch(` https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json())
    .then((res)=> res.json())
    .then((res)=> setdata(res[currency]))
    console.log(data);
    },[currency])

    console.log(data);
    return data
}

export default useCurrencyInfo;