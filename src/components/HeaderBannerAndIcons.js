import './Header.css'
import { useState,useEffect } from 'react';
import { HeaderNav } from './HeaderNav';
import {db} from  '../firebase/Crendenciales'
import {collection, query, getDocs,limit,orderBy} from "firebase/firestore";


export const HeaderBannerAndIcons = () => {
    const [data, setData] = useState(null);
    const [toggleNav, settoggleNav] = useState(false);
    const handleNav = (e) =>{
        switch (e.target.classList[1]) {
            case "fa-bars":
                settoggleNav([true,e.target.classList[1]])
                break;
            case "fa-cog":
                settoggleNav([true,e.target.classList[1]])
                break;
            default:
                alert("Error")
                break;
        }
    }
    const handleTakeOffNav = (e) =>{
        settoggleNav(false)
    }
    useEffect(() => {
        const ref = collection(db,"todos")
        const q = query(ref, orderBy("fecha","desc"), limit(10));
        getDocs(q)
        .then(res =>{
            let dataFromDb = []
            res.forEach(doc =>{
                let setData = doc.data()
                setData._idP = doc.id
                setData.fecha = doc.data().fecha.toDate().toLocaleDateString()
                dataFromDb.push(setData)
            })
            if(dataFromDb.length === 0)throw new Error("Error desconocido, intente nuevamente")
            setData(dataFromDb)

        })
        .catch(err =>{alert(err)})

    }, []);
    return (
        <>
        {toggleNav && <HeaderNav typeRender={toggleNav} handleTakeOffNav={handleTakeOffNav} data={data}/>}
        <img src='assets/jpg/mclajpg.jpg' alt='logo' className='HeaderBannerAndIcons-imgBanner'/>
        <div className="HeaderBannerAndIcons-divIcons">
          <i className="fas fa-bars HeaderBannerAndIcons-iIcon" onClick={handleNav}><p className='HeaderBannerAndIcons-pMessage'>Home</p></i>
          {
          data &&
          <i className="fas fa-cog HeaderBannerAndIcons-iIcon"  onClick={handleNav}><p className='HeaderBannerAndIcons-pMessage'>Recientes</p></i>
          }
          <i className="fas fa-search HeaderBannerAndIcons-iIcon"><p className='HeaderBannerAndIcons-pMessage'>Buscar</p></i>
        </div>
        </>
    )
}
