import React,{useEffect,useState} from 'react'
import moon from '../images/moon.png'
import sun from '../images/sun.png'

export const Header = () => {

  const [theme,setTheme]=useState('light-theme')
  const toggle=()=>{
    (theme ==='light-theme')?setTheme('dark-theme'):setTheme('light-theme');
    (theme ==='light-theme')?<img src={moon} alt='Dark'/>:<img src={sun} alt='Light'/>
  }
  useEffect(()=>{
    document.body.className=theme
  },[theme])
  return (
    <>

    <h2>
      Expense Tracker
      <button onClick={toggle}>{(theme ==='light-theme')?<img src={moon} alt='Dark'/>:<img src={sun} alt='Light'/>}</button>      
    </h2>
    </>

  )
}

