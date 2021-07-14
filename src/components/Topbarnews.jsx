import styles from '../styles/Topbarnews.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LogoRnHoje from '../../public/images/logos/avatar-rounded-green.png'
import {
    UilBookmark,
    UilShareAlt,
    UilArrowLeft
} from '@iconscout/react-unicons'
export default function Topbarnews(props) {
    return (
        <div className={styles.box}>
            <div className={styles.backlogo}>
                <div className={styles.back}>
                    <Link href="/">
                            <a>
                                <UilArrowLeft size={35} color="#999" />
                            </a>
                    </Link>
                </div>
                <div className={styles.logo}>
                    <Image src={LogoRnHoje} alt="Logo RN Hoje" width={30} height={30} layout="fixed" />
                </div>
            </div>
            
            <div className={styles.category}>
                <span>{props.category}</span>
            </div>
            <div className={styles.saveshare}>
                <Link href={`/salvar/${props.seourl}`}>
                        <a>
                            <UilBookmark size={23} color="#999" />
                        </a>
                </Link>
                   <Link href={`/compartilhar/${props.seourl}`}>
                        <a>
                            <UilShareAlt size={23} color="#999" />
                        </a>
                    </Link>
            </div>
        </div>
    )
}