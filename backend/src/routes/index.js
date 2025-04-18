import express from "express";
import { question1, question2, question3, question4 } from "../controllers/questions.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "API fonctionne !" });
});

router.get("/question1", question1);
router.get("/question2", question2);
router.get("/question3", question3);
router.get("/question4", question4);

export default router;
