import create from "zustand";

export const BACKGROUND = {
  good: "good",
  medium: "medium",
  bad: "bad",
};

export type Background = keyof typeof BACKGROUND;

type State = {
  range: string;
  background: Background;
  setRange: (val: string) => void;
  setBackground: (color: Background) => void;
};

const useStore = create<State>((set) => ({
  range: "12",
  background: "good",
  setRange: (val) => set(() => ({ range: val })),
  setBackground: (color) => set(() => ({ background: color })),
}));

export default useStore;
