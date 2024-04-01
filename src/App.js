import { useState } from 'react'
const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
    { id: 3, description: 'Charger', quantity: 1, packed: false },
]

export default function App() {
    const [items, setItems] = useState(initialItems, [])

    function handleAddedItems(item) {
        setItems((items) => [...items, item])
    }
    function handleRemovedItems(id) {
        setItems((items) => items.filter((item) => item.id !== id))
    }

    return (
        <div className="app">
            <Header />
            <Form onAddedItems={handleAddedItems} />
            <Packinglist
                items={items}
                onHandleRemovedItems={handleRemovedItems}
            />
            <Footer />
        </div>
    )
}

function Header() {
    return <h1>✈️ Far Away 🏝️</h1>
}
function Form({ onAddedItems }) {
    const [description, setDescription] = useState('')
    const [quantity, setQuantety] = useState(1)

    function handleSubmit(e) {
        e.preventDefault()
        if (!description) return
        const newItem = {
            description,
            quantity,
            id: Date.now(),
            packed: false,
        }
        console.log(newItem)
        onAddedItems(newItem)

        setDescription('')
        setQuantety(1)
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for you trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantety(Number(e.target.value))}
                placeholder="quontaty"
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></input>
            <button>ADD</button>
        </form>
    )
}
function Packinglist({ items, onHandleRemovedItems }) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        item={item}
                        onHandleRemovedItems={onHandleRemovedItems}
                        key={item.id}
                    />
                ))}
            </ul>
        </div>
    )
}

function Item({ item, onHandleRemovedItems }) {
    return (
        <li style={item.packed ? { textDecoration: 'line-through' } : {}}>
            <span>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onHandleRemovedItems(item.id)}>❌</button>
        </li>
    )
}

function Footer() {
    return (
        <footer className="stats">
            <em>You have x items on your list, and you alrady packed x (x%)</em>
        </footer>
    )
}
