import create from 'zustand';

export const BACKGROUND = {
  good: 'good',
  medium: 'medium',
  bad: 'bad',
};

export type Background = keyof typeof BACKGROUND;

type State = {
  range: string;
  background: Background;
  showLetters?: boolean;
  showNumbers?: boolean;
  showSymbols?: boolean;
  setRange: (val: string) => void;
  setBackground: (color: Background) => void;
  setShowLetters: (showLetters: boolean) => void;
  setShowNumbers: (showNumbers: boolean) => void;
  setShowSymbols: (showSymbols: boolean) => void;
};

const useStore = create<State>((set) => ({
  range: '12',
  background: 'good',
  showLetters: true,
  showNumbers: true,
  showSymbols: false,
  setRange: (val) => set(() => ({range: val})),
  setBackground: (color) => set(() => ({background: color})),
  setShowLetters: (letter) => set(() => ({showLetters: letter})),
  setShowNumbers: (number) => set(() => ({showNumbers: number})),
  setShowSymbols: (symbol) => set(() => ({showSymbols: symbol})),
}));

export default useStore;
