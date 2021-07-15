export default function Auth() {
    //console.log('#Local Storage')

    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
        if (!localStorage.getItem('rnhoje-user')) {
            console.log('Não tem storage')
            return null
        } else {
            console.log('Tem Storage')
            return JSON.parse(localStorage.getItem('rnhoje-user'))
        }
    }
}