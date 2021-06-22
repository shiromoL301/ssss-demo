/**
 * ページ単位のグローバルステート。
 * 特定のページでしか使わないが、ページ遷移後も保持したいため作る。
 */
import { atom } from 'recoil'

import type { Threshold, Share } from '@/types'

// __________
//
export const thresholdAtom = atom<Threshold>({
  key: 'RECONSTRUCT::threshold',
  default: 3,
})

export const sharesAtom = atom<Share[]>({
  key: 'RECONSTRUCT::shares',
  default: [],
})
