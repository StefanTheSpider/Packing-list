export default function Footer({ items }) {
    if (items.length === 0)
        return (
            <p className="stats">
                <em>Start Packing 🧳</em>
            </p>
        )
    const itemsTotal = items.length
    const itemsPacked = items.filter((item) => item.packed).length
    const prozent = ((itemsPacked / itemsTotal) * 100).toFixed(0)
    return (
        <footer className="stats">
            <em>
                {prozent < 100
                    ? `You have ${itemsTotal} items on your list, and you alrady packed 
              ${itemsPacked} (${prozent}%)`
                    : "🎉🎉🎉 You're done 🎉🎉🎉"}
            </em>
        </footer>
    )
}
