import React from "react";
import BreathingExercises from "../../components/breathingexercises/breathingexercises";
import ProgressiveMuscleRelaxation from "../../components/progressivemusclerelaxation/progressivemusclerelaxation";

const TherapyToolsPage = () => {
    return (
        <div className="therapy-tools-page">
            <h1>Therapy Tools</h1>

            <BreathingExercises />
            <ProgressiveMuscleRelaxation />
        </div>
    );
};

export default TherapyToolsPage;