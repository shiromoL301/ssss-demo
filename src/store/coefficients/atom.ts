import { atom } from 'recoil'

// __________
//
export type Coefficients = number[]

export const coefficientsAtom = atom<Coefficients>({
  key: 'coefficients',
  default: [],
})
