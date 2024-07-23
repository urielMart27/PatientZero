import React from "react";
import muscleRelaxationAudio from "../../audio/musclerelaxationaudio.mp3"

const ProgressiveMuscleRelaxation = () => {
    return (
        <div>
            <h2>Progressive Muscle relaxation Exercise</h2>
            <p>
                Welcome to the Progressive Muscle Relaxation Exercise
            </p>
            <p>
                Instructions:
                <ol>
                <li>Clench your fists and hold for 5 seconds. Release and relax your hands and arms completely.</li>
          <li>Raise your shoulders towards your ears and hold for 5 seconds. Release and let your shoulders drop, feeling the tension release from your neck.</li>
          <li>Tense your facial muscles by scrunching your face tightly for 5 seconds. Release and let your face relax completely, focusing on your jaw and forehead.</li>
          <li>Take a deep breath in, hold for 5 seconds, and then exhale slowly. Feel your chest and back muscles relax with each breath.</li>
          <li>Tense your stomach muscles by sucking in for 5 seconds. Release and let your stomach and hips relax completely.</li>
          <li>Tense your leg muscles by pointing your toes upwards for 5 seconds. Release and let your legs and feet go limp, feeling the tension melt away.</li>
                </ol>
            </p>
            <audio controls>
            <source src={muscleRelaxationAudio} type="audio/mpeg" />

                Your Browser does not support the audio element 
            </audio>
        </div>
    );
};

export default ProgressiveMuscleRelaxation;