import style from './Menu.module.css'

export const Menu = () => {
  return (
    <>
      <div className={style.wrapBtns}>
          <a href="/">Produtos</a>
          <a href="/Api">Api</a>
          <a href="/Mapa">Mapa</a>
          <a href="/Grafico">Grafico</a>
      </div>
      <div  className={style.wrapPage}>
          <h1>Exercícios de manutenção</h1>
      </div>
    </>
  )
}

