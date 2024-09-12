import style from './Modal.module.css'
import Draggable from 'react-draggable'; 
export const Modal = ({character, close}) => {
    return(
        <Draggable>
        <div className={style.modal}>
            <div className={style.close}>
                <span className={style.button} onClick={close} class="material-symbols-outlined">close</span>
            </div>
            <h1>Sobre</h1>
            <div className={style.corpo}>
                <img src={character.image} width={150} height={"auto"}/>
                <h2>{character.name}</h2>
            </div>
                <h4>Espécie: {character.species}</h4>
                <h4>Status: {character.status}</h4>
                <h4>Genero: {character.gender}</h4>
                <h4>Local atual: {character.location.name}</h4>
                <h4>Origem: {character.origin.name}</h4>
        </div>
        </Draggable>
    )
}
