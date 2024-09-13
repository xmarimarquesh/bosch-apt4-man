import style from "./Card.module.css"

/* eslint-disable react/prop-types */
export const Card = ({name, desc, value, image, status}) => {
  return(
      <div className={style.cardinho}>
          <div className={status ? style.verde : style.vermelho}></div>
          <div>
            <h1>{name}</h1>
            <h5>{desc}</h5>
          </div>
          <img src={image} alt={name} width={150} height={"auto"}/>
          <h4>R${value}</h4>
      </div>
  )
}
