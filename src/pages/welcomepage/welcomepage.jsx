import React, {useState} from "react";
import Welcome from "../../components/welcome/Welcome";
import Onboarding from "../../components/onboarding/Onboarding";

const WelcomePage = () => {
return (
    <div>
        <Onboarding />
        <Welcome />
    </div>
);
};
export default WelcomePage;