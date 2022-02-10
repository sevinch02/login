import { useContext } from "react";

import {Context} from './LangContext';

function useLang(){

    let {lang, setLang} = useContext(Context)

    return [lang, setLang]
}

export default useLang;