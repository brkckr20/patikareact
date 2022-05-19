import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import Button from './Button'
import Header from './Header'
import Profile from './Profile'
const Container = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`app ${theme === 'dark' ? theme : ""}`}>

            <Header />
            <hr />
            <Button />
            <hr />
            <Profile />
        </div>
    )
}

export default Container;