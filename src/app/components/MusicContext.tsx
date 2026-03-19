import { createContext, useContext, useState, ReactNode } from 'react';

// ─── Track catalogue ──────────────────────────────────────────────────────────
export const TRACK_TITLE = 'https://res.cloudinary.com/dx3g0mcw2/video/upload/v1772407745/title-theme_lwupzw.mp3';
export const TRACK_RAMEN = 'https://res.cloudinary.com/dx3g0mcw2/video/upload/v1772434216/Steam_Over_Noodles_ndfojo.wav';

// ─── Context ──────────────────────────────────────────────────────────────────
interface MusicContextValue {
  currentSrc: string;
  setTrack: (src: string) => void;
}

const MusicContext = createContext<MusicContextValue>({
  currentSrc: TRACK_TITLE,
  setTrack: () => {},
});

export function MusicProvider({ children }: { children: ReactNode }) {
  const [currentSrc, setCurrentSrc] = useState(TRACK_TITLE);
  return (
    <MusicContext.Provider value={{ currentSrc, setTrack: setCurrentSrc }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
