import {useEffect,useState } from 'react';
import { Loader } from '../components/Loader';
import {db} from  '../firebase/Crendenciales'
import {collection,getDocs} from "firebase/firestore";
import { MainCurso } from '../components/MainCurso';

export const LandingPage = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        setLoading(true)
        getDocs(collection(db,"todos"))
        .then(
            res =>{
                let dataFromDb = []
                res.forEach(doc =>{
                    let setData = doc.data()
                    setData._idP = doc.id
                    setData.fecha = doc.data().fecha.toDate().toLocaleDateString()
                    dataFromDb.push(setData)
                })
                if(dataFromDb.length === 0)throw new Error("Hubo un error desconocido. Intente nuevamente")
                setLoading(false)
                setData(dataFromDb)
            }
        )
        .catch(err => {alert(err);setLoading(false)})
    }, []);
    return (
        <>
            {loading&&<Loader/>}
            <MainCurso data={data}/>
        </>
    )
}
