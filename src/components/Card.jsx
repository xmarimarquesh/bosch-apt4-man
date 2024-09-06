import style from "./Card.module.css"

/* eslint-disable react/prop-types */
export const Card = ({name, desc, value, image, status}) => {
  console.log(status);
  return(
    // <div className={style.cards}>
      <div className={style.card}>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <div className={status ? style.verde : style.vermelho}></div>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
    // </div>
  )
}