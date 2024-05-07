//TutorialApp.jsx
import EmbroideryTutorial from "./EmbroideryTutorial";
import { useNavigate } from 'react-router-dom';
import './Tutorial.css';
import HeaderAfterLogin from "../Header/HeaderAfterLogin";

function TutorialApp() {
    let navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
        console.log("Navigate to Home");
    };

    return (
        <div style={{ backgroundColor: "#ffba42" }}>
            <HeaderAfterLogin />
            <div className="tutorial-content">
                <EmbroideryTutorial />
            </div>
        </div>
    );
}

export default TutorialApp;
