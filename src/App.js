import { useState } from 'react'

const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
    { id: 3, description: 'Charger', quantity: 1, packed: true },
]

export default function App() {
    return (
        <div className="app">
            <Header />
            <Form />
            <Packinglist />
            <Footer />
        </div>
    )
}

function Header() {
    return <h1>✈️ Far Away 🏝️</h1>
}
function Form() {
    const [description, setDescription] = useState('')
    const [quantaty, setQuantety] = useState(1)

    function handleSubmit(e) {
        e.preventDefault()
        if (!description) return
        const newItem = {
            description,
            quantaty,
            id: Date.now(),
            packed: false,
        }
        console.log(newItem)
        initialItems.push(newItem)

        setDescription('')
        setQuantety(1)
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for you trip?</h3>
            <select
                value={quantaty}
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
function Packinglist() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    )
}

function Item({ item }) {
    return (
        <li style={item.packed ? { textDecoration: 'line-through' } : {}}>
            <span>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
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
