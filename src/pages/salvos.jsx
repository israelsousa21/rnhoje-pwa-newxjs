import Menubar from '../components/Menubar'
import styles from '../styles/Salvos.module.css'
import Image from 'next/image'
import imgPhone from '../../public/images/miscelanious/phone-save.svg'
export default function Salvos() {
    return (
        <>
            <div className={styles.box}>
                <Image
                    src={imgPhone}
                    alt="Salvos"
                    layout="responsive"
                    width={73}
                    height={51}
                />
                <h1>Faça login e salve conteúdos para ver mais tarde</h1>
                <button>ENTRAR</button>
            </div>
            <Menubar page="salvos" />
        </>
    )
}