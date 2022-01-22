import create from 'zustand';
export interface CountState {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

export const useStore = create<CountState>(set => ({
  count: 0,
  increaseCount: () => {
    set(state => ({count: state.count + 1}));
  },
  decreaseCount: () => {
    set(state => ({count: state.count - 1}));
  },
}));
