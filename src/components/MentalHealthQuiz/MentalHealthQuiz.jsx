import React, { useState } from "react";

const questions = [
    {
        question: "How often have you been feeling down, depressed, or hopeless?",
        options: [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly every day"
        ]
    },
    {
        question: "How often have you had little interest or pleasure in doing things?",
        options: [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly every day"
        ]
    },
    {
        question: "How often have you been feeling nervous, anxious, or on edge?",
        options: [
            "Not at all",
            "Several days",
            "More than half the days",
            "Nearly every day"
        ]
    }
    
];

const MentalHealthQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, SetAnswers] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleOptionClick = (answer) => {
        const updatedAnswers = [...answers, answer];

        if (currentQuestion < questions.length -1) {
            setCurrentQuestion(currentQuestion + 1);
            SetAnswers(updatedAnswers);
        } else {
            SetAnswers(updatedAnswers);
            setQuizCompleted(true);
            console.log("Quiz completed. Answers: ", updatedAnswers);
        }
    };
    return (
        <div>
            <h2>Mental Health Quiz</h2>
            {quizCompleted ? (
                <p>Thank you for completing the quiz!</p>
            ) : (
                <div>
                    <p>{questions[currentQuestion].question}</p>
                    <div>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                             key={index}
                             onClick={() => handleOptionClick(option)}
                             className="quiz-option-button"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MentalHealthQuiz;