import { createContext, useState, useEffect } from "react";


const Context = createContext()

function Provider({children}){

    const [lang, setLang] = useState(window.localStorage.getItem('lang') || 'uz')

    useEffect(() =>{
        window.localStorage.setItem('lang', lang)
    }, [lang])

    return(
        <Context.Provider value={{lang, setLang}}>{children}</Context.Provider>
    )
}

export {Provider, Context}

