import { useEffect, useState } from "react"

const useNav = () => {
    const [nav,setNav] = useState(false)
    const scrolBar = () => {
        if(window.scrollY >= 250){
            setNav(true)
        }else{
            setNav(false)
        }
    }
    useEffect(() => {
        scrolBar()
        window.addEventListener('scroll',scrolBar)
    },[])
    return [nav,setNav];
}

export default useNav