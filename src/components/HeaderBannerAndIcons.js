import './Header.css'
import { useState } from 'react';
import { HeaderNav } from './HeaderNav';
export const HeaderBannerAndIcons = () => {
    const [toggleNav, settoggleNav] = useState(false);
    const handleNav = (e) =>{
        switch (e.target.classList[1]) {
            case "fa-bars":
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
    return (
        <>
        {toggleNav && <HeaderNav typeRender={toggleNav} handleTakeOffNav={handleTakeOffNav}/>}
        <img src='assets/jpg/mclajpg.jpg' alt='logo' className='HeaderBannerAndIcons-imgBanner'/>
        <div className="HeaderBannerAndIcons-divIcons">
          <i className="fas fa-bars HeaderBannerAndIcons-iIcon" onClick={handleNav}><p className='HeaderBannerAndIcons-pMessage'>Home</p></i>
          <i className="fas fa-cog HeaderBannerAndIcons-iIcon" onClick={handleNav}><p className='HeaderBannerAndIcons-pMessage'>Productos</p></i>
          <i className="fas fa-search HeaderBannerAndIcons-iIcon"><p className='HeaderBannerAndIcons-pMessage'>Buscar</p></i>
        </div>
        </>
    )
}
