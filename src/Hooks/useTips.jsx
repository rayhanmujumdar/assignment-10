import { useEffect, useState } from "react"

const useTips = () => {
    const [services,setServices] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rayhanmujumdar/module-60-ginus-car-service/main/public/tip.assignment.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoading(false)
        })
    },[])
    return [services,setServices,loading]
}
export default useTips