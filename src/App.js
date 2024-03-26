export default function App() {
    return (
        <div className="App">
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
    return (
        <div className="add-form">
            <h3>something</h3>
            <input></input>
            <input></input>
            <button></button>
        </div>
    )
}
function Packinglist() {
    return <div className="list">hier kommt ein Bild rein</div>
}
function Footer() {
    return (
        <footer className="stats">
            <em>You have x items on your list, and you alrady packed x (x%)</em>
        </footer>
    )
}
