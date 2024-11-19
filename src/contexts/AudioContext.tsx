'use client';

import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

type AudioContextType = {
  isPlaying: boolean;
  toggleAudio: () => void;
  autoplayAllowed: boolean;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayAllowed, setAutoplayAllowed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/song/msaki.mp3');
    audio.loop = true;
    audioRef.current = audio;

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setAutoplayAllowed(true);
      } catch (error) {
        console.error("Autoplay prevented:", error);
        setIsPlaying(false);
        setAutoplayAllowed(false);
      }
    };

    attemptAutoplay();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setAutoplayAllowed(true);
          })
          .catch((error) => {
            console.error("Playback failed:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio, autoplayAllowed }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};