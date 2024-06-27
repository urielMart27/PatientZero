import React, {useState} from "react";
import Welcome from "../../components/welcome/Welcome";
import Onboarding from "../../components/onboarding/Onboarding";

const WelcomePage = () => {
return (
    <div>
        <Welcome />
        <Onboarding />
        <p><b>DISCLAIMER:</b>"Patient Zero is not a substitute for therapy. We aim to provide support and resources."</p>
    </div>
);
};
export default WelcomePage;