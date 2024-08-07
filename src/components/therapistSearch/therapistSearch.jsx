import React, { useState } from "react";

const TherapistSearch = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [insurance, setInsurance] = useState('');
    const [specialization, setSpecialization] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ location, insurance, specialization });

    };

    return (
    <form onSubmit={handleSearch}>
        <input 
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location" 
        />
        <input 
        type="text"
        value={insurance}
        onChange={(e) => setInsurance(e.target.value)}
        placeholder="Insurance" 
        />     
        <input 
        type="text"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
        placeholder="Specialization" 
        />
        <button type="submit">Search</button>
    </form>
    );
};

export default TherapistSearch;