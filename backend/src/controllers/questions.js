import db, { sequelize } from "../../models/index.js";

// Lister les clients qui ont au moins un emprunt en retard
const question1Query = `
SELECT e.idClient, c.nom, COUNT(*) AS nbRetards 
FROM Emprunte e 
JOIN Client c USING (idClient) 
WHERE e.statutEmprunt = 'retard' 
GROUP BY e.idClient, c.nom;`;

// Lister tous les clients qui ont des emprunts actifs avec la date de retour
const question2Query = `
SELECT e.idEmprunt, c.nom, l.titre, e.dateEmprunt, e.dateLimiteRetour
FROM Emprunte e
JOIN Client c USING(idClient)
JOIN Livre l USING(isbn)
WHERE e.statutEmprunt = 'en_cours'
ORDER BY e.dateLimiteRetour;`;

// Lister les commandes et les clients qui n'ont pas encore récupérer leur commande
const question3Query = `
SELECT c.idCommande, cl.nom, l.titre, c.dateCommande, c.dateLimiteRetrait, c.statutCommande
FROM Commande c
JOIN Client cl USING (idClient)
JOIN Livre l USING (isbn)
WHERE c.statutCommande IN ('en_attente', 'disponible')
AND c.dateLimiteRetrait >= DATE '2025-04-17'
ORDER BY c.dateLimiteRetrait;`;

// Lister le nombre total de commandes par genre de livre
const question4Query = `
SELECT l.genre, COUNT(*) AS nbCommandes
FROM Commande c
JOIN Livre l USING (isbn)
GROUP BY l.genre
ORDER BY nbCommandes DESC;`;

export const question1 = async (_, response) => {
    try {
        const [result, metadata] = await sequelize.query(question1Query);
        response.json(result);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erreur lors de la requete de la question 1" })
    }
}

export const question2 = async (_, response) => {
    try {
        const [result, metadata] = await sequelize.query(question2Query);
        response.json(result);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erreur lors de la requete de la question 2" })
    }
}

export const question3 = async (_, response) => {
    try {
        const [result, metadata] = await sequelize.query(question3Query);
        response.json(result);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erreur lors de la requete de la question 3" })
    }
}

export const question4 = async (_, response) => {
    try {
        const [result, metadata] = await sequelize.query(question4Query);
        response.json(result);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erreur lors de la requete de la question 4" })
    }
}