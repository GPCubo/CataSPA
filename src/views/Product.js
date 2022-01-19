import { Link, useParams } from "react-router-dom"
import { useEffect,useState } from 'react'
import { Loader } from "../components/Loader";
import {db} from  '../firebase/Crendenciales'
import {doc,getDoc} from "firebase/firestore";

export const Product = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const Params = useParams()
    useEffect(() => {
        if(!Params)return
        setData(null)
        setLoading(true)
        const ref = doc(db,"todos",Params._idT)
        getDoc(ref)
        .then(res=> {
            if(!res.exists())throw new Error("Error desconocido, intente nuevamente")
            setData(res.data())
            setLoading(false)
        })
        .catch(err =>{alert(err);setLoading(false)})
    }, [Params]);
    return (
        <div className="Product">
            {loading && <Loader/>}
            {
                data &&
                <>
                    <img alt="product" src={data.imagen} className="product-imgProduct"/>
                    <div className="product-divLinks">
                        {
                            data.link ?
                            <>
                                <a href={data.link} target="_blank" className="product-pDev">Acceder al Producto</a>
                            </>
                            :
                            <>
                                <p className="product-pDev">Link en desarrollo</p>
                            </>
                        }
                        <Link to="/">Ver otros productos</Link>
                    </div>
                </>
            }
        </div>
    )
}
