import Auth from '../data/auth'
import styles from '../styles/Topbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LogoRnHoje from '../../public/images/logos/logo-horizontal-positivo-big-globe.png'

export default function Topbar() {
    const userData = Auth()

    function Logado() {
        if(userData){
            console.log(userData.avatar)
            const loaderAvatar = ({ src }) => { return `${userData.avatar}` }
            return (
                <div className={styles.useravatar}>
                    <Link href="/perfil">
                        <a>
                        <Image
                            loader={loaderAvatar} 
                            src={userData.avatar} 
                            alt={userData.first_name} 
                            width={30} height={30} 
                            />
                        </a>
                    </Link>
                </div>
            )
        }else{
            return null
        }
    }
    return (
        <div className={styles.box}>
            <div className={styles.logo}>
                <Image src={LogoRnHoje} alt="Logo RN Hoje" width={98} height={50} />
            </div>
            {Logado()}
        </div>
    )
}