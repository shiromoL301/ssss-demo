import { VFC, useMemo } from 'react'
import styled from 'styled-components'

import { GraphView } from '@/components/common/GraphView'

import { useReconstruct } from '../hooks/useReconstruct'

// __________
//
const SecretContainer = styled.div`
  font-size: 1.5rem;
`

const SecretValue = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`

// __________
//
const PolynomialView: VFC = () => {
  const { shares } = useReconstruct()

  const f = useMemo(() => {
    const xSet = new Set(shares.map((s) => s.x))
    if (xSet.size !== shares.length) return null

    // Lagrange basis polynomials
    // O(deg^2)
    return (x: number) => {
      let result = 0
      shares.forEach((p1, i) => {
        const [num, deno] = shares.reduce(
          (prev, p2, j) => {
            if (i === j) return prev
            return [prev[0] * (x - p2.x), prev[1] * (p1.x - p2.x)]
          },
          [1, 1]
        )
        result += (num / deno) * p1.y
      })
      return result
    }
  }, [shares])

  return (
    <div>
      <div>
        <GraphView
          f={f || (() => 0)}
          primaryPoints={f ? [{ x: 0, y: f(0) }] : []}
          secondaryPoints={shares}
        />
      </div>
      <SecretContainer>
        秘密値: {f ? <SecretValue>{Math.round(f(0))}</SecretValue> : 'ERROR'}
      </SecretContainer>
    </div>
  )
}

export default PolynomialView
