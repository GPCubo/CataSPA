import { Link } from "react-router-dom"

export const MainCurso = ({data}) => {
    return (
        <>
        {
            data  &&
            <div className="MainCurso">
            {
                data.map(
                    (el,index) => {
                        return(
                            <div key={"MainCurso-divMap"+index} className="MainCurso-divMap">
                                <img src={el.imagen} className="MainCurso-imgMockUp" alt="mockup"/>
                                <Link to={"/product/"+el._idP} className="MainCurso-pTitle">{el.titulo}</Link>
                                <p className="MainCurso-pType">
                                {
                                    el.tipo.map((type,id) =>{
                                        return(
                                            <span key={"MainCurso-linkBlock"+id}>
                                                <Link to={"/category/"+type.replace(/\s+/g, '-').toLocaleLowerCase()} className="MainCurso-linkBlock">{type}</Link>
                                            </span>
                                        )
                                    })
                                }
                                </p>
                            </div>
                        )}
                )
            }
            </div>
        }
        </>
    )
}
