import { useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'

import type { Share } from '@/types'

import { sharesAtom } from '../atoms'

// __________
//
const MIN = -4
const MAX = 10
const SHARE_MAX = 10

function getRandomZ(min: number, max: number) {
  return Math.round(Math.random() * (max - min)) + min
}

function getDistinctX(set: Set<number>) {
  let x = getRandomZ(MIN, MAX)
  while (set.has(x)) {
    x = getRandomZ(MIN, MAX)
  }
  return x
}

export function useShare(threshold: number, f: (x: number) => number) {
  const [shares, setShares] = useRecoilState(sharesAtom)

  const canAppend = useMemo(() => shares.length < SHARE_MAX, [shares])

  const appendDistinctShare = useCallback(() => {
    if (!canAppend) return
    const xSet = new Set(shares.map((share) => share.x))
    xSet.add(0)
    const x = getDistinctX(xSet)
    const share: Share = {
      x,
      y: f(x),
    }
    setShares((prev) => [...prev, share])
  }, [threshold, f, shares, canAppend])

  const initShares = useCallback(() => {
    setShares([])
  }, [])

  return { shares, setShares, appendDistinctShare, canAppend, initShares }
}
