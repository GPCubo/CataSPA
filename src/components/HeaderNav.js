import { useEffect,useState } from 'react';
import { constsHeaderNav } from "../constantes/constsHeaderNav"
import {Link} from 'react-router-dom'
export const HeaderNav = ({typeRender, handleTakeOffNav,data}) => {
    const [search, setSearch] = useState(null);
    useEffect(() => {
        if(!typeRender)return
        if(typeRender[1] === "fa-bars"||typeRender[1] === "fa-cog") document.getElementsByClassName(`HeaderNav-ulMap${typeRender[1]}`)[0].classList.add("HeaderNav-ulMap--active");
        // if(typeRender[1] === "fa-search") document.getElementsByClassName(`HeaderNav-div${typeRender[1]}`)[0].classList.add("HeaderNav-div--active")
    }, [typeRender]);
    useEffect(() => {
        if(!search)return
        document.getElementById("HeaderNav-divfa-search__Link").click()
        document.getElementsByClassName("HeaderNav-divfa-search__i")[0].click()
    }, [search]);

    const handleSubmit = (e)=>{
        e.preventDefault()
        const s = document.getElementsByClassName("HeaderNav-divfa-search__input")[0]
        if(s.value.length === 0){alert("Campo Vacio");return}
        setSearch(s.value)
    }

    return (
        <>
            <nav className="HeaderNav" onClick={handleTakeOffNav}>
                <ul className="HeaderNav-ulMapfa-bars">
                    {
                        constsHeaderNav.map(
                            (el,index) => {
                                return(
                                    <li key={el+index} className="HeaderNav-liEl"><Link className='HeaderNav-linkCategory' to={"/category/"+el.replace(/\s+/g, '-').toLocaleLowerCase()}>{el}</Link></li>
                                )}
                        )
                    }
                </ul>
                <ul className="HeaderNav-ulMapfa-cog">
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
        </nav>
        <div className='HeaderNav-divfa-search'>
            <form onSubmit={handleSubmit}>
                <input className='HeaderNav-divfa-search__input' type="search" placeholder='Buscar...'/>
            </form>
            <i className="fas fa-times-circle HeaderNav-divfa-search__i" onClick={handleTakeOffNav}></i>
            <Link id='HeaderNav-divfa-search__Link' to={"search/"+search}></Link>
        </div>
        </>
    )
}
