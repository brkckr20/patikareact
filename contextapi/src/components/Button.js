/* import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext' */


//custom context hook import işlemi
import { useTheme } from "../contexts/ThemeContext"
const Button = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <h4>Active tema : {theme}</h4>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change</button>
        </div>
    )
}

export default Button