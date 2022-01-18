import { Link } from "react-router-dom"

export const MainSearchMapData = ({data}) => {
    console.log(data)
    return (
        <>
        {
            data.map(
                el =>{
                    return(
                <article className="MainSearchMapData">
                    <Link to={"/product/"+el._idP}><img src={el.imagen} alt="curso" className="MainSearchMapData__imgCurso"/></Link>
                </article>
                )}
            )
        }
        </>
    )
}
