import React, {useState} from "react";
import Welcome from "../components/Welcome";
import Onboarding from "../components/Onboarding";

const WelcomePage = () => {
return (
    <div>
        <Onboarding />
        <Welcome />
    </div>
);
};
export default WelcomePage;