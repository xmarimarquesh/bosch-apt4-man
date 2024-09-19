import { useState, useEffect } from 'react'
import { CardApi } from './components/CardApi'
import { api } from "./api/rmApi"
import { Menu } from './components/Menu'
import style from './components/Menu.module.css'
import styleModal from './components/Modal.module.css'
import { Modal } from './components/Modal'

function Api() {
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")
    const [modal, setModal] = useState();

    useEffect(() => {
        api.get(`/character/?page=${page}&name=${name}`).then((response) => {
        if(!response.data.results){
            console.log("Vazio")
        }
        setData(response.data.results)
        }).catch((error) => {
        if(error.response.status === 404){
            alert("Esta pagina nao contem este personagem")
            console.log("Esta pagina nao contem este personagem")
        }
        console.error(error)
        })
    }, [page, name])

    return (
        <>
            {modal !== undefined && <Modal character={data[modal]} close={() => setModal()} />}
            <Menu />
            <div className={modal ? styleModal.BackGround : styleModal.divizona}>
                <h2>Rick and Morty API</h2>
                <div className={styleModal.input}>
                    <h3>Page</h3>
                    <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
                </div>
                <div className={styleModal.input}>
                    <h3>Character</h3>
                    <input type="text" placeholder="Search a character" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className={style.cards}>
                    {data.map((item) => (
                        <div key={item.id} className={style.card}>
                                <CardApi
                                    name={item.name}
                                    desc={item.species}
                                    value={item.gender}
                                    image={item.image}
                                    status={item.status}
                                />
                                <button onClick={() => setModal(item.id - 1)}>Info</button>
                            </div>
                    ))}
                </div>
            </div>
        </>
    );
    
}

export default Api
