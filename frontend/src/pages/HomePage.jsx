import { useNavigate } from "react-router-dom";

function HomePage() {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Projet - IFT2935</h1>
            <div class="btn-container">
                <button onClick={() => navigate("/Livres")}>Question 1 </button>
                <button onClick={() => navigate("/question2")}>Question 2</button>
                <button onClick={() => navigate("/question3")}>Question 3</button>
                <button onClick={() => navigate("/question4")}>Question 4</button>
            </div>
        </div>
    );
}

export default HomePage;