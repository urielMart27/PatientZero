import React, {useState, useEffect} from "react";

const DailyInspiration = ({ quotes }) => {
    const [randomIndex, setRandomIndex] = useState(0);

    useEffect(() => {
        setRandomIndex(Math.floor(Math.random() * quotes.length));
    }, [quotes]);

    const getRandomQuote = () => {
        const newIndex = Math.floor(Math.random() * quotes.length);
        setRandomIndex(newIndex);
    };

return (
    <div>
        <h2>Daily Inspiration</h2>
        <p>{quotes[randomIndex]}</p>
        <button onClick={getRandomQuote}>Generate New Quote</button>
    </div>
);
}
export default DailyInspiration;