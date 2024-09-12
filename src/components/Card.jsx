import style from "./Card.module.css"

/* eslint-disable react/prop-types */
export const Card = ({name, desc, value, image, status}) => {
  return(
      <>
          <h1>{name}</h1>
          <h4>{desc}</h4>
          <p>{value}</p>
          <div className={status ? style.verde : style.vermelho}></div>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </>
  )
}
