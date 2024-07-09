import React,{useEffect} from "react";

const DefaultCustomHook = (count) => {
    useEffect(() => {
        document.title=`count - ${count}`;
    
    }, [count]);
}

export default DefaultCustomHook;