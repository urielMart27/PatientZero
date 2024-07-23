import React from "react";

const conditionsAndTreatments = [
    {
        condition: 'Depression',
        description: 'A mood disorder that causes a persistent feeling of sadness and loss of interest.',
        treatments: ['Psychotherapy', 'Medication', 'Lifestyle changes'],
    },
    {
        condition: 'Anxiety',
        description: 'A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one\'s daily activities.',
        treatments: ['Cognitive-behavioral therapy (CBT)', 'Medication', 'Stress management techniques'],
      },
      {
        condition: 'Bipolar Disorder',
        description: 'A disorder associated with episodes of mood swings ranging from depressive lows to manic highs.',
        treatments: ['Medication', 'Psychotherapy', 'Lifestyle changes'],
      },
];

const ConditionInfo = () => {
    return (
        <div>
            <h2>Mental Health Conditions and Treatment Options</h2>
            {conditionsAndTreatments.map((item, index) => (
                <div key={index}>
                    <h3>{item.condition}</h3>
                    <p>{item.description}</p>
                    <h4>Treatment Options:</h4>
                    <ul>
                        {item.treatments.map((treatment, idx) => (
                            <li key={idx}>{treatment}</li>
                        ))}
                    </ul>
                </div>

            ))}
        </div>
    )
}

export default ConditionInfo;