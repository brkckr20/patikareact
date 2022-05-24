import { useState } from 'react'

const defaultItems = [
    {
        name: "Item A"
    },
    {
        name: "Item B"
    },
    {
        name: "Item C"
    }
]


const Todo = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);


    const addItem = () => {
        setItems(prev => [...prev, { name: text }])
        setText("");
    }
    return (
        <div>
            <label>
                text
                <input type="text" name='name' value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <button onClick={addItem}>Ekle</button>
            <br />
            <br />
            {
                items.map((item, key) => (
                    <div key={key}>{item.name}</div>
                ))
            }
        </div>
    )
}

export default Todo