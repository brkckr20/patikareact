import { useState, createContext, useContext, useEffect } from 'react'

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addToBasket = (data, findBasketItems) => {
        if (!findBasketItems) {
            return setItems((items) => [data, ...items])
        }
        const filtered = items.filter((item) => item._id !== findBasketItems._id)
        /* setItems((prevState) => [...prevState, data]) */
        setItems(filtered)
    }

    const values = {
        items,
        setItems,
        addToBasket
    }
    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    )
}

const useBasket = () => useContext(BasketContext);

export {
    useBasket,
    BasketProvider
}