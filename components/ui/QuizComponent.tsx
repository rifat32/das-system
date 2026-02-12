'use client';

import { useState } from 'react';

interface QuizComponentProps {
    question: string;
    correctAnswer: string;
    placeholder?: string;
}

export default function QuizComponent({ question, correctAnswer, placeholder = "Type your answer..." }: QuizComponentProps) {
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

    const checkAnswer = () => {
        const normalized = userAnswer.trim().toLowerCase();
        const correct = correctAnswer.trim().toLowerCase();
        setFeedback(normalized === correct ? 'correct' : 'incorrect');
    };

    return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">✍️ Quiz</h4>
            <p className="text-gray-800 mb-4">{question}</p>

            <div className="flex gap-3 mb-3">
                <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => {
                        setUserAnswer(e.target.value);
                        setFeedback(null);
                    }}
                    placeholder={placeholder}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                />
                <button
                    onClick={checkAnswer}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                    Check
                </button>
            </div>

            {feedback && (
                <div className={`p-3 rounded ${feedback === 'correct' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {feedback === 'correct' ? (
                        '✅ Correct! Well done!'
                    ) : (
                        `❌ Not quite. The correct answer is: ${correctAnswer}`
                    )}
                </div>
            )}
        </div>
    );
}
