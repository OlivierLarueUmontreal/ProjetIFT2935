import { useEffect, useState } from "react";

function Livres() {
    const [result, setResult] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/question1');
            const data = await response.json();
            setResult(data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(result);

    return (
        <div>
            <h1>Question 1</h1>
            {result.length > 0 ? (
                <ul>
                    {result.map((item, index) => (
                        <li key={index}>
                            {JSON.stringify(item)}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    )
}

export default Livres;