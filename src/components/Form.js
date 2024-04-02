import { useState } from 'react';

export default function Form({ onAddedItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantety] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = {
            description,
            quantity,
            id: Date.now(),
            packed: false,
        };
        onAddedItems(newItem);

        setDescription('');
        setQuantety(1);
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
    );
}
