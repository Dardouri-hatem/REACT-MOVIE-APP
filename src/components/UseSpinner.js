import React,{useState} from 'react'
import Spinner from "./Spinner"

const  useSpinner=(component)=> {
    const [visible,setVisible] = useState(true);

    const showSpinner=()=>{
        setVisible(true);
    }
    const hideSpinner=()=>{
        setVisible(false);
        }
        
        setTimeout(()=>hideSpinner(),2000);
            
    

        const spinner=visible?<Spinner/>:component

        return [spinner,showSpinner,hideSpinner]
    }

export default useSpinner