import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Packinglist from './Packinglist';
import Form from './Form';

/** 
 const initialItems = [
    { id: 1, description: 'Passport', quantity: 1, packed: false },
    { id: 2, description: `paar's of socks`, quantity: 7, packed: false },
    { id: 3, description: 'Charger', quantity: 1, packed: false },
    { id: 4, description: 'Smatphone', quantity: 1, packed: false },
]
*/

export default function App() {
    const [items, setItems] = useState([]);

    function handleClearList() {
        const confirmed = window.confirm('Are you sure?');
        if (confirmed) setItems([]);
    }

    function handleAddedItems(item) {
        setItems((items) => [...items, item]);
    }
    function handleRemovedItems(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    return (
        <div className="app">
            <Header />
            <Form onAddedItems={handleAddedItems} />
            <Packinglist
                items={items}
                onHandleRemovedItems={handleRemovedItems}
                onHandleToggleItem={handleToggleItem}
                onHandleClearList={handleClearList}
            />
            <Footer items={items} />
        </div>
    );
}
