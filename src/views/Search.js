import { useParams } from "react-router-dom"
import { useEffect } from 'react'
// import {db} from  '../firebase/Crendenciales'
// import {collection,where,getDocs, query} from "firebase/firestore";

export const Search = () => {
    const Params = useParams()
    useEffect(() => {
        if(!Params)return
        console.log(Params.value)
        // const ref = collection(db,"todos")
        // const q = query(ref, where(), limit(10));
        // getDocs(q)
    }, [Params]);
    return (
        <>
            <h1>Looking For</h1>
        </>
    )
}
