import React from "react";

const TherapistProfile = ({ therapist}) => {
    return (
        <div>
            <img src={therapist.photo} alt={`${therapist.name}'s photo`} />
            <h3>{therapist.name}</h3>
            <p>{therapist.bio}</p>
            <p><strong>Expertise:</strong>{therapist.expertise.join(', ')}</p>
            <button>Book Appointment </button>
        </div>
    );
};

export default TherapistProfile;