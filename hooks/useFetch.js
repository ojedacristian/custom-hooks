import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) =>{
        
    const isMounted = useRef(true)

    useEffect(() => {
        console.log('montado')
        return () => {
            isMounted.current = false;
        }
    }, [])

    const [state, setState] = useState({
        data:null,
        loading: true,
        error: null
    })

    useEffect(()=>{
        setState({data:null, loading: true, error:null})

        fetch(url)
        .then(res => res.json())
        .then(data => {
 
           setTimeout(
               ()=>{
                
                if(isMounted.current){
                    setState({
                        data,
                        loading:false,
                        error:null
                    })
                } else{
                    console.log('no se llamo al useState')
                }
                   },3000) 
        })
    },[ url ])
    
    return state;
}