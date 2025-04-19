import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Question2() {
    const navigate = useNavigate();
    const [result, setResult] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/question2');
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
            <h1>Question 2</h1>

            <div className="question-section">
                <h2>Objectif</h2>
                <span>Lister tous les clients qui ont des emprunts actifs avec la date de retour</span>
            </div>

            <div className="sql-section">
                <h2>Requête SQL</h2>
                <pre>
                    {`SELECT e.idEmprunt, c.nom, l.titre, e.dateEmprunt, e.dateLimiteRetour
                    FROM Emprunte e
                    JOIN Client c USING (idClient)
                    JOIN Livre l USING (isbn)
                    WHERE e.statutEmprunt = 'en_cours'
                    ORDER BY e.dateLimiteRetour;`}
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

export default Question2;