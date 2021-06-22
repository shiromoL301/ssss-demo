/**
 * ページ単位のグローバルステート。
 * 特定のページでしか使わないが、ページ遷移後も保持したいため作る。
 */
import { atom } from 'recoil'

import type { Threshold, Secret, Share } from '@/types'

// __________
//
export const thresholdAtom = atom<Threshold>({
  key: 'SHARING::threshold',
  default: 3,
})

export const secretAtom = atom<Secret>({
  key: 'SHARING::secret',
  default: 123,
})

export const sharesAtom = atom<Share[]>({
  key: 'SHARING::shares',
  default: [],
})
