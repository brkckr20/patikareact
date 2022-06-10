import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import { Button } from '@chakra-ui/react'

import { useAuth } from '../../contexts/AuthContext'
import { useBasket } from '../../contexts/BasketContext';

const Navbar = () => {
    const { loggedIn, user } = useAuth();
    const { items } = useBasket();

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">e-Commerce</Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                {
                    !loggedIn && (
                        <>
                            <Link to="/signin">
                                <Button colorScheme='blue'>Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button colorScheme='blue'>Register</Button>
                            </Link>
                        </>
                    )
                }
                {
                    loggedIn && (
                        <>
                            {
                                items.length > 0 && (

                                    <Link to="/basket">
                                        <Button colorScheme="whatsapp" mr="1.5">Basket ({items.length})</Button>
                                    </Link>

                                )
                            }

                            {
                                user?.role === "admin" && (
                                    <Link to="/admin">
                                        <Button colorScheme="messenger">
                                            Admin
                                        </Button>
                                    </Link>
                                )

                            }


                            <Link to="/profile">
                                <Button colorScheme='facebook'>Profile</Button>
                            </Link>
                        </>
                    )
                }

            </div>
        </nav>
    )
}

export default Navbar