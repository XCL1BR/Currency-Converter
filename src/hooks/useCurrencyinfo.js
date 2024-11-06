import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo(currency){
     // Jab Bhi Koi component mount hota hai means uska life cycle event trigger hota hai toh uske liye ek hook hota hai useEffect
     //iss method se fetch automatically call ho jaayega or hume kisi dusre function likhne ki jaroorat nhi hogi API call karne ke liye 
    //mostly API call ki value jo aati hai wo string format mei aati hai toh use handle karna padta hai...
    const [data,setData] = useState({})
     useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
            
    
    },[currency])

    return data
    }

    export default useCurrencyInfo;