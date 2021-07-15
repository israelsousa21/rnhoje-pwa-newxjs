import Auth from '../data/auth'
import baseURL from '../data/baseurl'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Login.module.css'
import Image from 'next/image'
import LogoRNHoje from '../../public/images/logos/logo-horizontal-positivo-big-globe.png'

export default function Login() {
    const router = useRouter()
    const userData = Auth()
    const baseurl = baseURL()

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [alerterror, setAlerterror] = useState(null)

    async function sendForm(e) {
        e.preventDefault()
        let data = {
            user,
            password
        }
        
        const formdata = new FormData()
        formdata.append('user', data.user)
        formdata.append('password', data.password)

        const resp = await fetch(`${baseurl}login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formdata
        })
        if (resp.status === 200) {
            const dataReceived = await resp.json()
            console.log('aqui')
            console.log(dataReceived.data)
            setSubmitted(true)
            setUser('')
            setPassword('')
            const ISSERVER = typeof window === "undefined";
            if (!ISSERVER) {
                localStorage.setItem('rnhoje-user', JSON.stringify(dataReceived.data))
            }
            router.push('/')

        }else{
            const error = await resp.json()
            console.log(error.status_msg)
            setAlerterror(`${error.status_msg}`)
        }
    }

    if (userData) {
        router.push('/')
    }

    return (
        <>
            <div className={styles.box}>
                <Image
                    src={LogoRNHoje}
                    alt="Logo RN Hoje"
                    layout="fixed"
                    width={135}
                    height={65}
                />
                <h1>CONTA RN HOJE</h1>
                <p>Entre com os dados para fazer login</p>
                <form enctype="multipart/form-data">
                <em>{alerterror}</em>
                    <div className={styles.formgroup}>
                        <label htmlFor="name">E-mail</label>
                        <input id="user" name="user" onChange={(e) => { setUser(e.target.value) }} type="email" required autocomplete="off" />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="name">Senha</label>
                        <input id="password" name="password" onChange={(e) => { setPassword(e.target.value) }} type="password" required autocomplete="off" />
                    </div>
                    <button onClick={(e) => { sendForm(e) }}>ENTRAR</button>
                </form>
                <span>Não tem conta? <Link href="/criar-conta"><a>CRIAR CONTA</a></Link></span>

            </div>
        </>
    )
}