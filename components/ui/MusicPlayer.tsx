'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music, SkipForward, SkipBack } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number;
  src: string;
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tracks: Track[] = [
    {
      id: 1,
      title: 'Way Back Home',
      artist: 'SHAUN ft. Conor Maynard',
      duration: 3072,
      src: '/music/way-back-home.mp3',
    },
  ];

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    const audio = new Audio(currentTrack.src);
    audio.loop = false;
    audio.volume = 0.5;
    audioRef.current = audio;

    let isMounted = true;

    // Hàm thực thi phát nhạc
    const playAudio = () => {
      if (!audioRef.current) return;
      audioRef.current
        .play()
        .then(() => {
          if (isMounted) setIsPlaying(true);
        })
        .catch(() => {
          // Bị chặn autoplay -> Chờ tương tác đầu tiên của người dùng
          const handleFirstUserInteraction = () => {
            if (audioRef.current) {
              audioRef.current
                .play()
                .then(() => {
                  if (isMounted) setIsPlaying(true);
                })
                .catch((err) => console.log('Play on interaction failed:', err));
            }
            // Xóa listener sau khi đã tương tác
            removeInteractionListeners();
          };

          const addInteractionListeners = () => {
            window.addEventListener('click', handleFirstUserInteraction, { once: true });
            window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });
            window.addEventListener('keydown', handleFirstUserInteraction, { once: true });
          };

          const removeInteractionListeners = () => {
            window.removeEventListener('click', handleFirstUserInteraction);
            window.removeEventListener('touchstart', handleFirstUserInteraction);
            window.removeEventListener('keydown', handleFirstUserInteraction);
          };

          addInteractionListeners();
        });
    };

    const handleLoadedMetadata = () => {
      if (!isMounted) return;
      setIsLoaded(true);
      playAudio();
    };

    const handleTimeUpdate = () => {
      if (!isMounted) return;
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      if (!isMounted) return;
      setCurrentTrackIndex((prevIndex) =>
        prevIndex < tracks.length - 1 ? prevIndex + 1 : 0
      );
      setIsPlaying(false);
    };

    const handlePlay = () => {
      if (isMounted) setIsPlaying(true);
    };

    const handlePause = () => {
      if (isMounted) setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      isMounted = false;
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [currentTrack.src, currentTrackIndex]);

  // Bật / Tắt phát nhạc thủ công
  const togglePlay = () => {
    if (!audioRef.current || !isLoaded) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log('Audio play prevented:', error));
    }
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <div
      className="flex items-center gap-2 rounded-full transition-all duration-300 "
      style={{ minWidth: '280px', maxWidth: '340px' }}
    >
      {/* Icon & Thông tin bài hát */}
      <div className="flex items-center gap-2 group flex-1 min-w-0">
        {isPlaying ? (
          <div className="relative flex-shrink-0">
            <Music size={16} className="text-primary animate-music-glow" />
          </div>
        ) : (
          <Music size={16} className="text-foreground/40 group-hover:text-foreground/60 flex-shrink-0" />
        )}

        <div className="text-left min-w-0 flex-1">
          <p className="text-xs font-medium text-foreground/80 leading-tight truncate">
            {currentTrack.title}
          </p>
          <p className="text-[10px] text-foreground/40 leading-tight truncate">
            {currentTrack.artist}
          </p>
        </div>
      </div>

      {/* Điều khiển */}
      <div className="flex items-center gap-0.5 flex-shrink-0">
        <button
          onClick={prevTrack}
          className="p-1 hover:bg-primary/10 rounded-full transition-colors"
          aria-label="Previous"
        >
          <SkipBack size={14} className="text-foreground/60 hover:text-foreground" />
        </button>

        <button
          onClick={togglePlay}
          className="p-1.5 bg-primary hover:bg-primary/80 rounded-full transition-all transform hover:scale-105"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause size={14} className="text-white" />
          ) : (
            <Play size={14} className="text-white ml-0.5" />
          )}
        </button>

        <button
          onClick={nextTrack}
          className="p-1 hover:bg-primary/10 rounded-full transition-colors"
          aria-label="Next"
        >
          <SkipForward size={14} className="text-foreground/60 hover:text-foreground" />
        </button>
      </div>

      {/* Thời gian */}
      <div className="hidden lg:block text-[10px] text-foreground/40 font-mono min-w-[48px] text-right flex-shrink-0">
        {formatTime(currentTime)}
      </div>
    </div>
  );
}
