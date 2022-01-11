import { useEffect } from 'react';
import { constsHeaderNav } from "../constantes/constsHeaderNav"
export const HeaderNav = ({typeRender, handleTakeOffNav}) => {
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
                                    <li key={el+index} className="HeaderNav-liEl">{el}</li>
                                )}
                        )
                    }
                </ul>
                :
                <ul className="HeaderNav-ulMap">
                {
                    constsHeaderNav.map(
                        (el,index) => {
                            return(
                                <li key={el+index} className="HeaderNav-liEl">hello world</li>
                            )}
                    )
                }
                </ul>
            } 
        </nav>
    )
}
