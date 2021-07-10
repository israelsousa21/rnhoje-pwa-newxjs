import styles from '../styles/Topbarnews.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LogoRnHoje from '../../public/images/logos/avatar-rounded-green.png'
import IconBack from '../../public/images/icons/icon-arrow-back.png'
import IconSave from '../../public/images/icons/icon-save.png'
import IconShare from '../../public/images/icons/icon-share.png'
export default function Topbarnews(props) {
    return (
        <div className={styles.box}>
            <div className={styles.backlogo}>
                <div className={styles.back}>
                    <Link href="/">
                        <Image src={IconBack} alt="Voltar" width={21} height={21} layout="fixed" />
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
                <Link href="/salvar">
                    <Image src={IconSave} alt="Salvar" width={23} height={23} layout="fixed" />
                </Link>
                <Link href="/compartilhar">
                    <Image src={IconShare} alt="Compartilhar" width={21} height={21} layout="fixed" />
                </Link>
            </div>
        </div>
    )
}