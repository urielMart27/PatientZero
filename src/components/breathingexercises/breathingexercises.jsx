// Deep Breathing
// Box Breathing
// 4-7-8 Breathing
import React from "react";

const BreathingExercises = () => {
    const exercises = [
        {
            title: "Deep Breathing",
            animationSrc: "/images/deepbreathing.gif",
            instructions:"Sit or lie down in a comfortable position. Inhale deeply through your nose for 4 seconds, hold for 7 seconds, and exhale slowly through your mouth for 8 seconds. Repeat for several cycles."

        },
        {
            title: "Box Breathing",
            animationSrc: "/images/Boxbreathing.gif",
            instructions: "Visualize a square. Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, and hold for 4 seconds. Repeat the cycle."
        },
        {
            title: "4-7-8 Breathing",
            animationSrc: "/images/4-7-8 exercise.gif",
            instructions: "Place the tip of your tongue against the ridge of tissue just behind your upper front teeth. Inhale through your nose quietly for 4 seconds, hold your breath for 7 seconds, and exhale completely through your mouth for 8 seconds."
        }
    ];

    return (
        <div className="deep-breathing-exercises">
            <h2>Breathing Exercises</h2>

            {exercises.map((exercise, index) => (
                <div key={index} className="breathing-exercise">
                    <h3>{exercise.title}</h3>
                    <div className="animation">
                        <img src={process.env.PUBLIC_URL + exercise.animationSrc} alt={`${exercise.title} Animation`} />
                    </div>
                    <div className="instructions">
                        <p>{exercise.instructions}</p>
                    </div>
                </div>
                
            ))}
        </div>
    );

}
export default BreathingExercises;