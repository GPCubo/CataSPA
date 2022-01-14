import { useEffect } from 'react';
import { constsHeaderNav } from "../constantes/constsHeaderNav"
import {Link} from 'react-router-dom'
export const HeaderNav = ({typeRender, handleTakeOffNav,data}) => {
    useEffect(() => {
        if(!typeRender)return
        document.getElementsByClassName("HeaderNav-ulMap")[0].classList.add("HeaderNav-ulMap--active")
    }, [typeRender]);
    return (
        <nav className="HeaderNav" onClick={handleTakeOffNav}>
            {
                typeRender[1] === "fa-bars" ?
                <ul className="HeaderNav-ulMap">
                    {
                        constsHeaderNav.map(
                            (el,index) => {
                                return(
                                    <li key={el+index} className="HeaderNav-liEl"><Link className='HeaderNav-linkCategory' to={"/category/"+el.replace(/\s+/g, '-').toLocaleLowerCase()}>{el}</Link></li>
                                )}
                        )
                    }
                </ul>
                :
                <ul className="HeaderNav-ulMap">
                    <h1 className='HeaderNav-h1SeeProducts'>RECIENTES</h1>
                {
                    data &&
                    data.map(
                        (el,index) => {
                            return(
                                <li key={el+index} className="HeaderNav-liEl">
                                    <img alt='product' src={el.imagen} className='HeaderNav-imgProduct' />
                                    <div>
                                        <Link to={"/product/"+el._idP} className='HeaderNav-LinkTitle'>{el.titulo}</Link>
                                        <p className='HeaderNav-pDate'><span className='HeaderNav-spanPublicado'>Publicado: </span>{el.fecha}</p>
                                    </div>
                                </li>
                            )}
                    )
                }
                </ul>
            } 
        </nav>
    )
}
