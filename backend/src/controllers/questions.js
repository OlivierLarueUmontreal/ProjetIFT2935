import db, { sequelize } from "../../models/index.js";
const { client } = db;

export const question1 = async (_, response) => {
    try {
        const [result, metadata] = await sequelize.query(`SELECT * FROM Client;`);
        // const result = await client.findAll();
        response.json(result);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erreur lors de la requete de la question 1" })
    }
}

export const question2 = async (_, response) => {
    try {
        let toto = await Client.findAll({ where: { nom: 'Client_1' } });
        response.json(toto);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erreur lors de la requete de la question 2" })
    }
}

export const question3 = async (_, response) => {
    try {
        let toto = await Client.findAll({ where: { nom: 'Client_1' } });
        response.json(toto);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erreur lors de la requete de la question 3" })
    }
}

export const question4 = async (_, response) => {
    try {
        const [results, _] = await sequelize.query(`SELECT * FROM Client`);
        response.json(results);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Erreur lors de la requete de la question 4" })
    }
}