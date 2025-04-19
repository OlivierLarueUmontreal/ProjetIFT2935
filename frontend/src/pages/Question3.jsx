import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Question3() {
    const navigate = useNavigate();
    const [result, setResult] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/question3');
            const data = await response.json();
            setResult(data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (

        <div className="question-container">
            <button className="back-button" onClick={() => navigate(-1)}>Retour à l'acceuil</button>
            <h1>Question 3</h1>

            <div className="question-section">
                <h2>Objectif</h2>
                <span>Lister les commandes et les clients qui n'ont pas encore récupérer leur commande</span>
            </div>

            <div className="sql-section">
                <h2>Requête SQL</h2>
                <pre>
                    {`SELECT c.idCommande, cl.nom, l.titre, c.dateCommande, c.dateLimiteRetrait, c.statutCommande
                    FROM Commande c
                    JOIN Client cl USING (idClient)
                    JOIN Livre l USING (isbn)
                    WHERE c.statutCommande IN ('en_attente', 'disponible')
                    AND c.dateLimiteRetrait >= DATE '2025-04-17'
                    ORDER BY c.dateLimiteRetrait;`}
                </pre>
            </div>

            <div className="result-section">
                <h2>Résultat</h2>
                {result.length > 0 ? (
                    <table className="table-question">
                        <thead>
                            <tr>
                                {Object.keys(result[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((item, index) => (
                                <tr key={index}>
                                    {Object.values(item).map((value, idx) => (
                                        <td key={idx}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                ) : (
                    <p>Chargement des données...</p>
                )}
            </div>
        </div >
    )
}

export default Question3;