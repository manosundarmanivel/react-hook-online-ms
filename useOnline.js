import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, SetOnline] = useState(true);
  useEffect(
    ()=>{
        const handleOnline = () => {
            SetOnline(true);
          }
        
          const handleOffline =  () => {
            SetOnline(false);
          }
    
    window.addEventListener("online", handleOnline ),
    window.addEventListener("offline",handleOffline)
    return () =>{
        window.removeEventListener("online",handleOnline)
        window.removeEventListener("offline",handleOffline)
    }
    
},
    []
  );

  return online;
};


export default useOnline;