import React, {useRef} from 'react';
import './App.css';
import content from './Content';
import useLang from './useLang'


function App() {
  const loginRef = useRef(null);
  const parolRef = useRef(null)
  const [lang, setLang] = useLang()

const getRef = (e) => {
  e.preventDefault();
  console.log('login: ' +  loginRef.current.value);
  console.log('parol: ' +  parolRef.current.value );
} 
    
  
  return (
    <div className="App">
   
      <select defaultValue={lang} onChange={(e) =>{
            setLang(e.target.value)
        }}>
        <option value="uz">uz</option>
        <option value="en">en</option>
     </select>

     <form className='form'>
       <h4>{content[lang].Login}</h4> 
       <label htmlFor='login'>{content[lang].name}</label>
       <input className='input'  ref={loginRef} type='text' required  />
       <label htmlFor='' >{content[lang].password}</label>
       <input  className='input' ref={parolRef} type='password' required  />
       <button className='form-btn' onClick={getRef} type='submit'>Submit</button>
     </form>
    </div>
  );
}

export default App;
