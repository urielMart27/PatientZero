import React from "react";
import { Link } from "react-router-dom";

const therapyMethods = [
    {
        name: "Cognitive Behavioral Therapy (CBT)",
        description: "Cognitive Behavioral Therapy (CBT) is a structured, goal-oriented psychotherapy that aims to address dysfunctional emotions, behaviors, and thoughts. It involves identifying and challenging negative thought patterns and replacing them with more constructive ones.",
        benefits: [
            "Improves Mood: Helps reduce symptoms of depression and anxiety.",
            "Changes Thought Patterns: Assists in identifying and altering negative thinking.",
            "Enhances Coping Skills: Teaches practical skills for managing stress and difficult situations."
        ],
        targetConcerns: [
            "Depression",
            "Anxiety Disorders",
            "Stress Management",
            "Obsessive-Compulsive Disorder (OCD)",
            "Post-Traumatic Stress Disorder (PTSD)"
        ],
        techniques: [
            "Cognitive Restructuring: Identifying and challenging negative thoughts.",
            "Behavioral Activation: Encouraging engagement in enjoyable or meaningful activities.",
            "Exposure Therapy: Gradually facing feared situations or objects."
        ],
        video: "https://www.youtube.com/watch?v=JiDaTi_iQrY"
    },
    {
        name: "Mindfulness-Based Stress Reduction (MBSR)",
        description: "Mindfulness-Based Stress Reduction (MBSR) is a structured program that incorporates mindfulness meditation and yoga to help individuals manage stress and improve overall well-being. It focuses on being present in the moment and developing awareness of one's thoughts, emotions, and body sensations.",
        benefits: [
            "Reduces Stress: Helps decrease overall stress levels and improve stress management.",
            "Enhances Emotional Regulation: Improves the ability to handle emotions effectively.",
            "Promotes Relaxation: Encourages relaxation and improves sleep quality."
        ],
        targetConcerns: [
            "Chronic Stress",
            "Anxiety",
            "Chronic Pain",
            "Sleep Disorders",
            "General Well-being"
        ],
        techniques: [
            "Body Scan Meditation: Focusing on physical sensations in different parts of the body.",
            "Mindful Breathing: Paying attention to the breath and its natural rhythm.",
            "Mindful Movement: Combining movement with mindfulness, often through yoga or gentle stretching."
        ]
    },
    {
        name: "Dialectical Behavior Therapy (DBT)",
        description: "Dialectical Behavior Therapy (DBT) is a cognitive-behavioral approach that focuses on helping individuals manage intense emotions and improve interpersonal relationships. It combines individual therapy with skills training in mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.",
        benefits: [
            "Emotional Stability: Helps individuals manage and regulate intense emotions.",
            "Improved Relationships: Enhances interpersonal skills and relationship quality.",
            "Enhanced Coping Skills: Provides strategies for coping with stress and crisis situations."
        ],
        targetConcerns: [
            "Borderline Personality Disorder (BPD)",
            "Self-Harm",
            "Suicidal Thoughts",
            "Emotional Dysregulation",
            "Relationship Issues"
        ],
        techniques: [
            "Mindfulness Skills: Enhancing awareness and acceptance of the present moment.",
            "Distress Tolerance Skills: Building resilience to distress and emotional pain.",
            "Emotion Regulation Skills: Learning to manage and change intense emotions.",
            "Interpersonal Effectiveness Skills: Improving communication and relationship skills."
        ]
    },
    {
        name: "Acceptance and Commitment Therapy (ACT)",
        description: "Acceptance and Commitment Therapy (ACT) is a therapeutic approach that emphasizes accepting negative thoughts and feelings rather than fighting them. It encourages commitment to actions aligned with personal values and goals, promoting psychological flexibility.",
        benefits: [
            "Increased Psychological Flexibility: Enhances the ability to adapt to changing situations and emotions.",
            "Improved Quality of Life: Encourages living in alignment with personal values.",
            "Reduced Avoidance: Helps individuals face and accept uncomfortable feelings."
        ],
        targetConcerns: [
            "Anxiety",
            "Depression",
            "Chronic Pain",
            "Stress",
            "Substance Abuse"
        ],
        techniques: [
            "Acceptance Exercises: Learning to accept negative thoughts and feelings.",
            "Values Clarification: Identifying and committing to personal values.",
            "Mindfulness Techniques: Practicing being present and aware in the moment."
        ]
    }
];

const TherapyOptionsPage = () => {
    return (
        <div>
        <h1>Therapy Options</h1>
        {therapyMethods.map((method, index) => (
            <div key={index}>
                <h2>{method.name}</h2>
                <p><strong>Description:</strong> {method.description}</p>
                <p><strong>Benefits:</strong></p>
                <ul>
                    {method.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                    ))}
                </ul>
                <p><strong>Target Concerns:</strong></p>
                <ul>
                    {method.targetConcerns.map((concern, idx) => (
                        <li key={idx}>{concern}</li>
                    ))}
                </ul>
                <p><strong>Sample Techniques:</strong></p>
                <ul>
                    {method.techniques.map((technique, idx) => (
                        <li key={idx}>{technique}</li>
                    ))}
                </ul>
                {method.video && (
                    <div className="video-container">
                       <iframe 
                       width="560" 
                       height="315" 
                       src="https://www.youtube.com/embed/q6aAQgXauQw?si=koKgoFjyGZiEGw9T" 
                       title="YouTube video player" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                       referrerPolicy="strict-origin-when-cross-origin" 
                       allowFullScreen></iframe>
                    </div>

                )}
            </div>
        ))}
        <div>
            <h2>Looking For a therapist?</h2>
            <Link to="/findtherapist">
            <button>Find a Therapist</button>
            </Link>
        </div>
        </div>
    );
};

export default TherapyOptionsPage;