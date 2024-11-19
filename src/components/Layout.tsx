'use client';

import React from 'react';
import { Volume2, Play } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isPlaying, toggleAudio, autoplayAllowed } = useAudio();

  return (
    <div>
      {children}
      {autoplayAllowed ? (
        <button
          onClick={toggleAudio}
          className="fixed bottom-4 right-4 p-2 bg-[#D4B996] rounded-full hover:bg-[#C1A982] transition-colors duration-300 z-50"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-[#8B4513]" />
          ) : (
            <Play className="w-6 h-6 text-[#8B4513]" />
          )}
        </button>
      ) : (
        <button
          onClick={toggleAudio}
          className="fixed bottom-4 right-4 p-2 bg-[#D4B996] rounded-full hover:bg-[#C1A982] transition-colors duration-300 z-50"
          aria-label="Play music"
        >
          <Play className="w-6 h-6 text-[#8B4513]" />
        </button>
      )}
    </div>
  );
};