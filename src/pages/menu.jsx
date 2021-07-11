import Menubar from '../components/Menubar'
import styles from '../styles/Menu.module.css'
export default function Salvos() {
    return (
        <>
            <div className={styles.box}>
                [access sua conta][ou cadastre-se grátis]
                [Lista do editorial]
            </div>
            <Menubar page="menu" />
        </>
    )
}