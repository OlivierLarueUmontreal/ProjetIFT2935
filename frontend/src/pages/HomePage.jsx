import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>IFT2935 - Projet - Bibliothèque</h1>
            <h5></h5>
            <div class="btn-container">
                <button className="homePage-btn" onClick={() => navigate("/question1")}>Question 1</button>
                <button className="homePage-btn" onClick={() => navigate("/question2")}>Question 2</button>
                <button className="homePage-btn" onClick={() => navigate("/question3")}>Question 3</button>
                <button className="homePage-btn" onClick={() => navigate("/question4")}>Question 4</button>
            </div>
            <footer className="footer">
                <p>Réalisé par [Olivier Larue (20269986), Claudéric DeRoy (20102789), Alex ..., Noah Tremblay Taillon (20190661)]</p>
                <p>Hiver 2025</p>
            </footer>
        </div>
    );
}

export default HomePage;
