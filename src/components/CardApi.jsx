import style from "./Card.module.css"


// eslint-disable-next-line react/prop-types
export const CardApi = ({name, desc, value, image, status}) => {
    return(
            <div className={style.cardinho}>
                <h1>{name}</h1>
                <h2>{desc}</h2>
                <p>{value}</p>
                <p>{status}</p>
                <img src={image} alt={name} width={150} height={"auto"}/>
            </div>
    )
}