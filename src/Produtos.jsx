import { Card } from './components/Card'
import produtos from './constants/produtos.json'
import style from './components/Menu.module.css'
import { Menu } from './components/Menu'

function Produtos () {
    return(
        <>
            <Menu/>
            <h2 className={style.titulo}>Showroom de produtos</h2>
                <div className={style.cards}>
                    {produtos.map((item, index) => {
                    return(
                        <div key={index} className={style.card}>
                            <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} status={item.status} categoria={item.categoria}/>
                        </div>
                    )
                    })}
                </div>
        </>
    )
}

export default Produtos