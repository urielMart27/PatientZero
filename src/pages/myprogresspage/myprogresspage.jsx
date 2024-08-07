import React from "react";
import MoodTracker from "../../components/moodtracker/moodtracker";
import SymptomTracker from "../../components/symptomtracker/symptomtracker";

const MyProgressPage = () => {
    return (
        <div>
            <h1>My Progress</h1>
            <MoodTracker />
            <SymptomTracker />
        </div>
    )
}

export default MyProgressPage;
