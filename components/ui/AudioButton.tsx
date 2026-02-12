'use client';

import { useState } from 'react';

interface AudioButtonProps {
    word: string;
    audioUrl?: string;
}

export default function AudioButton({ word, audioUrl }: AudioButtonProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
        if (!audioUrl) {
            // Fallback: use Web Speech API
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'de-DE';
            utterance.onstart = () => setIsPlaying(true);
            utterance.onend = () => setIsPlaying(false);
            speechSynthesis.speak(utterance);
        } else {
            const audio = new Audio(audioUrl);
            audio.onplay = () => setIsPlaying(true);
            audio.onended = () => setIsPlaying(false);
            audio.play();
        }
    };

    return (
        <button
            onClick={playAudio}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            disabled={isPlaying}
        >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
            {isPlaying ? 'Playing...' : 'Pronunciation'}
        </button>
    );
}
