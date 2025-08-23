// AuthLayout is the mechanism through which you protect your pages and routes
// It will act as an container where we decide which component or page to display

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader ] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    //todo make it more easy

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return  loader ? <h1>Loading....</h1> : <>{children}</>
}

export default Protected