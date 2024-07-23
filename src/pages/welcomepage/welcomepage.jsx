import React, {useState} from "react";
import Welcome from "../../components/welcome/Welcome";
import Onboarding from "../../components/onboarding/Onboarding";
import MentalHealthQuiz from "../../components/MentalHealthQuiz/MentalHealthQuiz";

const WelcomePage = () => {
return (
    <div>
        <Welcome />
        <Onboarding />
        <MentalHealthQuiz />
        <p><b>DISCLAIMER:</b>"Patient Zero is not a substitute for therapy. We aim to provide support and resources."</p>
    </div>
);
};
export default WelcomePage;