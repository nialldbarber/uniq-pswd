import create from 'zustand';

export const BACKGROUND = {
  mega: 'mega',
  good: 'good',
  medium: 'medium',
  bad: 'bad',
};

export type Background = keyof typeof BACKGROUND;

type State = {
  password?: string;
  range: string;
  background: Background;
  showLetters?: boolean;
  showNumbers?: boolean;
  showSymbols?: boolean;
  setPassword: (password: string) => void;
  setRange: (range: string) => void;
  setBackground: (background: Background) => void;
  setShowLetters: (showLetters: boolean) => void;
  setShowNumbers: (showNumbers: boolean) => void;
  setShowSymbols: (showSymbols: boolean) => void;
};

const useStore = create<State>((set) => ({
  password: '',
  range: '12',
  background: 'good',
  showLetters: true,
  showNumbers: true,
  showSymbols: false,
  setPassword: (password) => set(() => ({password})),
  setRange: (range) => set(() => ({range})),
  setBackground: (background) => set(() => ({background})),
  setShowLetters: (showLetters) => set(() => ({showLetters})),
  setShowNumbers: (showNumbers) => set(() => ({showNumbers})),
  setShowSymbols: (showSymbols) => set(() => ({showSymbols})),
}));

export default useStore;
