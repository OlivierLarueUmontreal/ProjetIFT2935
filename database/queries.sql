--------------------------------------------------------------------------------
--
-- 4 REQUETES SQL
--
---------------------------------------------------------------------------------

-- Lister les clients qui ont au moins un emprunt en retard
SELECT e.idClient, c.nom, COUNT(*) AS nbRetards
FROM Emprunte e
JOIN Client c USING (idClient)
WHERE e.statutEmprunt = 'retard'
GROUP BY e.idClient, c.nom;

-- Lister tous les clients qui ont des emprunts actifs avec la date de retour
SELECT e.idEmprunt, c.nom, l.titre, e.dateEmprunt, e.dateLimiteRetour
FROM Emprunte e
JOIN Client c USING (idClient)
JOIN Livre l USING (isbn)
WHERE e.statutEmprunt = 'en_cours'
ORDER BY e.dateLimiteRetour;

-- Lister les commandes et les clients qui n'ont pas encore récupérer leur commande
SELECT c.idCommande, cl.nom, l.titre, c.dateCommande, c.dateLimiteRetrait, c.statutCommande
FROM Commande c
JOIN Client cl USING (idClient)
JOIN Livre l USING (isbn)
WHERE c.statutCommande IN ('en_attente', 'disponible')
AND c.dateLimiteRetrait >= DATE '2025-04-17'
ORDER BY c.dateLimiteRetrait;

-- Lister le nombre total de commandes par genre de livre
SELECT l.genre, COUNT(*) AS nbCommandes
FROM Commande c
JOIN Livre l USING (isbn)
GROUP BY l.genre
ORDER BY nbCommandes DESC;