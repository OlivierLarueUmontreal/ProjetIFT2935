import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Question1() {
    const navigate = useNavigate();
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

    return (
        <div className="question-container">
            <button className="back-button" onClick={() => navigate("/")}>Retour à l'acceuil</button>
            <h1>Question 1</h1>

            <div className="question-section">
                <h2>Objectif</h2>
                <span>Afficher les clients ayant au moins un emprunt en retard.</span>
            </div>

            <div className="sql-section">
                <h2>Requête SQL</h2>
                <pre>
                    {`SELECT e.idClient, c.nom, COUNT(*) AS nbRetards
                    FROM Emprunte e
                    JOIN Client c USING (idClient)
                    WHERE e.statutEmprunt = 'retard'
                    GROUP BY e.idClient, c.nom;`}
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

export default Question1;