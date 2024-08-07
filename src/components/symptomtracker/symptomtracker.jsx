import React, { useState } from "react";

const symptomsList = [
    'Headache',
    'Fatigue',
    'Anxiety',
    'Depression',
    'Insomnia',
    'Nausea',
    'Irritability',
];

const SymptomTracker = () => {
    const [trackedSymptoms, setTrackedSymptoms] = useState(
        symptomsList.map((symptom) => ({ name: symptom, tracked: false }))
    );

    const handleSymptomChange = (index) => {
        const newTrackedSymptoms = [...trackedSymptoms];
        newTrackedSymptoms[index].tracked = !newTrackedSymptoms[index].tracked;
        setTrackedSymptoms(newTrackedSymptoms);
    };

    return (
        <div>
            <h2>Symptom Tracker</h2>
            <ul>
                {trackedSymptoms.map((symptom, index) => (
                    <li key={index}>
                        <label>
                            <input 
                            type="checkbox"
                            checked={symptom.tracked}
                            onChange={() => handleSymptomChange(index)}
                             />
                             {symptom.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SymptomTracker;