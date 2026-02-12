'use client';

import { useState } from 'react';

interface PredictionTaskProps {
    question: string;
    answer: string;
}

export default function PredictionTask({ question, answer }: PredictionTaskProps) {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">🤔 Prediction Task</h4>
            <p className="text-blue-800 mb-4">{question}</p>

            {!revealed ? (
                <button
                    onClick={() => setRevealed(true)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                    Reveal Answer
                </button>
            ) : (
                <div className="bg-white border-l-4 border-green-500 p-4 rounded">
                    <p className="text-gray-800">{answer}</p>
                </div>
            )}
        </div>
    );
}
