import { createStore } from 'zustand';

const useStore = createStore((set) => ({
  logo: null,
  brandColor: '#7B61FF',
  brandFont: '',
  setLogo: (logo) => set({ logo }),
  setBrandColor: (color) => set({ brandColor: color }),
  setBrandFont: (font) => set({ brandFont: font })
}));

export default useStore;
