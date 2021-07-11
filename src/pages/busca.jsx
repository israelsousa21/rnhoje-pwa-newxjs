import Menubar from '../components/Menubar'
import styles from '../styles/Busca.module.css'
export default function Salvos() {
    return (
        <>
            <div className={styles.box}>
                [Barra de pesquisa]
                <h1>Explorar assuntos</h1>
                [Categorias]
            </div>
            <Menubar page="busca" />
        </>
    )
}