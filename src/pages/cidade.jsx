import Link from 'next/link'
import Menubar from '../components/Menubar'
import styles from '../styles/Cidade.module.css'
import Image from 'next/image'
import imgCidade from '../../public/images/miscelanious/my-location.svg'
export default function Cidade() {
    return (
        <>
            <div className={styles.box}>
                <Image
                    src={imgCidade}
                    alt="Minha Cidade"
                    layout="responsive"
                    width={73}
                    height={51}
                />
                <h1>As notícias da sua cidade em primeira mão</h1>
                <p>Faça o login e acompanhe as últimas notícias da
                    sua cidade, estado, Brasil e mundo.</p>
                <Link href="/login">
                    <button>ENTRAR</button>
                </Link>
            </div>
            <Menubar page="cidade" />
        </>
    )
}