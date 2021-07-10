import styles from '../styles/Topbar.module.css'
import Image from 'next/image'
import LogoRnHoje from '../../public/images/logos/logo-horizontal-positivo-big-globe.png'
export default function Topbar(){
    return(
        <div className={styles.box}>
            <Image src={LogoRnHoje} alt="Logo RN Hoje" width={98} height={50} />
        </div>
    )
}