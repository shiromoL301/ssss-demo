import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { sharesAtom, thresholdAtom } from '../atoms'

// __________
//
export function useReconstruct() {
  const [shares, setShares] = useRecoilState(sharesAtom)
  const [threshold, setThreshold] = useRecoilState(thresholdAtom)

  useEffect(() => {
    if (shares.length === threshold) return

    if (shares.length > threshold) {
      setShares(shares.slice(0, threshold))
    } else {
      setShares(
        shares.concat(new Array(threshold - shares.length).fill({ x: 0, y: 0 }))
      )
    }
  }, [shares, threshold])

  return { shares, setShares, threshold, setThreshold }
}
