import Topbar from '../components/Topbar'
import styles from '../styles/Login.module.css'
import Image from 'next/image'
import imgCidade from '../../public/images/miscelanious/my-location.svg'
export default function Login() {
    return (
        <>
            <Topbar page="Login" />
            <div className={styles.box}>
                <Image
                    src={imgCidade}
                    alt="Minha Cidade"
                    layout="responsive"
                    width={73}
                    height={51}
                />
                <h1>CONTA RN HOJE</h1>

                <button>ENTRAR</button>
            </div>
        </>
    )
}