import { VFC, useState, useEffect, useCallback } from 'react'

import { Share } from '@/types'

import { useReconstruct } from '../hooks/useReconstruct'

// __________
//
const ShareTable: VFC = () => {
  const { shares, setShares, threshold, setThreshold } = useReconstruct()
  const [tmpShares, setTmpShares] = useState<Share[]>(shares)

  useEffect(() => {
    if (tmpShares.length === threshold) return

    if (tmpShares.length > threshold) {
      setTmpShares(tmpShares.slice(0, threshold))
    } else {
      setTmpShares(
        tmpShares.concat(
          new Array(threshold - tmpShares.length).fill({ x: 0, y: 0 })
        )
      )
    }
  }, [threshold, tmpShares])

  useEffect(() => {
    const id = setInterval(() => {
      setShares(tmpShares)
    }, 1000)
    return () => clearInterval(id)
  }, [tmpShares])

  const updateTmpShares = useCallback(
    (index: number, inject: Partial<Share>) => {
      setTmpShares((prev) => {
        const newShares = [...prev]
        newShares[index] = { ...newShares[index], ...inject }
        return newShares
      })
    },
    []
  )

  return (
    <div>
      <h2>Shares</h2>
      <div>
        {tmpShares.map((share, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`${threshold}-${share.x}-${i}`}>
            <input
              type="number"
              value={share.x}
              onChange={(e) => updateTmpShares(i, { x: +e.target.value })}
            />
            <input
              type="number"
              value={share.y}
              onChange={(e) => updateTmpShares(i, { y: +e.target.value })}
            />
          </div>
        ))}
      </div>
      <div>
        Threshold:{' '}
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(+e.target.value)}
        />
      </div>
    </div>
  )
}

export default ShareTable
