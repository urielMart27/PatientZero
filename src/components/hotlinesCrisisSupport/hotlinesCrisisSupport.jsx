import React from "react";

const hotlines = [
    {
        name: 'National Suicide Prevention Lifeline',
        number: '1-800-273-8255 (TALK)', 
    },
    {
        name: 'Crisis Text Line',
        number: 'Text HOME to 741741', 
    },
    {
        name: 'National Sexual Assault Hotline',
        number: '1-800-656-HOPE (4673)', 
    },
    
];

const HotlinesCrisisSuppport = () => {
    return (
        <div>
            <h2>Hotlines & Crisis Support Resources</h2>
            <ul>
            {hotlines.map((hotline, index) => (
                <li key={index}>
                    <strong>{hotline.name}</strong> {hotline.number}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default HotlinesCrisisSuppport;