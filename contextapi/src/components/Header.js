import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
function Header() {
    const { theme,setTheme } = useContext(ThemeContext)
    return (
        <div>
            <h2 style={{margin : "0px"}}>Active Theme : {theme}</h2>
<button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}>Tema değiştir</button>
        </div>
    )
}

export default Header