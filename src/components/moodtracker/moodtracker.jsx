import React, {useState} from "react";

const MoodTracker = () => {
    const moods = [
        { mood: 'very sad', icon:'😢'},
        { mood: 'sad', icon: '😞'},
        { mood: 'decent', icon: '😐'},
        { mood: 'happy', icon: '😊'},
        { mood: 'very happy', icon: '😄'}
    ];

    const [selectedMood, setSelectedMood] = useState('');

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
    };

    return (
        <div>
            <h2>Mood Tracker</h2>
            <p>How are you feeling today? </p>
        <div>
        {moods.map((mood, index) => (
            <button 
            key={index} 
            onClick={() => handleMoodSelect(mood.mood)}
            style={{
                fontSize: '2em',
                padding: '10px',
                border: 'none',
                cursor: 'pointer'
            }}
            >
                {mood.icon}
            </button>

        ))}
        </div>
        {selectedMood && (
            <p>Selected mood: {selectedMood}</p>
        )}
        </div>
    );
};

export default MoodTracker;