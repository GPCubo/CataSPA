import { useEffect,useState } from 'react'
import {db} from  '../firebase/Crendenciales'
import {collection,where,getDocs, query} from "firebase/firestore";
import {useParams} from 'react-router-dom'
import { Loader } from '../components/Loader';
import { MainCurso } from '../components/MainCurso';
export const Category = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const Params = useParams().collection
    useEffect(() => {
        setData(null)
        if(!Params)return
        setLoading(true)
        const paramsConverted = Params.replace(/-/g, ' ')
        const ref = collection(db,"todos")
        const q = query(ref,where("tipo" , 'array-contains', paramsConverted.toUpperCase()))
        getDocs(q)
        .then(res=> {
            let dataFromDb = []
            res.forEach(doc => {
                let setData = doc.data()
                setData._idP = doc.id
                dataFromDb.push(setData)
            })
            if(dataFromDb.length === 0)throw new Error("No hay datos disponibles")
            console.log(dataFromDb)
            setLoading(false)
            setData(dataFromDb)
        })
        .catch(err =>{alert(err);setLoading(false)})
    }, [Params]);
    return (
        <div className='Category'>
            <h1 className='Category-pTitle'>{Params.replace(/-/g, ' ').toUpperCase()}</h1>
            {loading && <Loader/>}
            {
                data &&
                <MainCurso data={data}/>
            }
        </div>
    )
}
