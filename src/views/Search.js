import { useParams } from "react-router-dom"
import { useEffect,useState } from 'react'
import '../components/Main.css'
import { Loader } from "../components/Loader"
import {db} from  '../firebase/Crendenciales'
import {collection,where,getDocs, query} from "firebase/firestore";
import { MainSearchMapData } from "../components/MainSearchMapData"

export const Search = () => {
    const Params = useParams()
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);
    useEffect(() => {
        if(!Params)return
        setData(false)
        setLoading(true)
        const ParamsArray = Params.value.split(' ').map(el => el.toUpperCase())
        const ref = collection(db,"todos")
        const q = query(ref, where('tags','array-contains-any', ParamsArray));
        getDocs(q)
        .then(
            res => {
                let dataFromDb = []
                res.forEach(
                    doc => {
                        let setData = doc.data()
                        setData._idP = doc.id
                        dataFromDb.push(setData)
                })
                if(dataFromDb.length === 0) throw new Error("No encontramos un curso con dicha descripción")
                setData(dataFromDb)
                setLoading(false)
            }
        )
        .catch(err =>{alert(err);setLoading(false)})
    }, [Params]);
    return (
        <>
            {
            Params &&
            <h1 className="Search-h1">Resultados de la búsqueda:<span className="Search-h1__spanParams">{Params.value}</span></h1>
            }
            {loading&&<Loader/>}
            {data&&<MainSearchMapData data={data}/>}
        </>
    )
}
