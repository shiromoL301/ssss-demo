import { useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'

import { coefficientsAtom } from './atom'

// __________
//
export function useCoefficients() {
  const [coeffs, setCoeffs] = useRecoilState(coefficientsAtom)

  const deg = useMemo(() => coeffs.length - 1, [coeffs])

  const f = useCallback(
    (x: number) => coeffs.reduce((prev, cur, idx) => prev + cur * x ** idx, 0),
    [coeffs]
  )

  const initRandomCoeffs = useCallback(
    (degree: number, min: number, max: number) => {
      const result = []
      for (let i = 0; i <= degree; i += 1) {
        result.push(Math.round(Math.random() * (max - min)) + min)
      }
      setCoeffs(result)
    },
    []
  )

  return { coeffs, setCoeffs, deg, f, initRandomCoeffs }
}
