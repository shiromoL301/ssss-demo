import { VFC, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

import { Share } from '@/types'
import { Card } from '@/components/common/Card'
import { Input } from '@/components/common/Input'

import { useReconstruct } from '../hooks/useReconstruct'

// __________
//
type InputShare = {
  x: string | number
  y: string | number
}

// __________
//
const ShareComponent = styled.div`
  display: flex;
`

const ShareContainer = styled.div`
  margin: 12px 0px;
`

// __________
//
const ShareTable: VFC = () => {
  const { shares, setShares, threshold, setThreshold } = useReconstruct()
  const [tmpShares, setTmpShares] = useState<InputShare[]>(shares)

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
    const id = setTimeout(() => {
      const ss: Share[] = []
      tmpShares.forEach(({ x, y }) => {
        if (String(x).match(/^[+-]?\d+$/) && String(y).match(/^[+-]?\d+$/)) {
          ss.push({
            x: +x,
            y: +y,
          })
        }
      })

      setShares(ss)
    }, 1000)
    return () => clearInterval(id)
  }, [tmpShares])

  const updateTmpShares = useCallback(
    (index: number, inject: Partial<InputShare>) => {
      setTmpShares((prev) => {
        const newShares = [...prev]
        newShares[index] = { ...newShares[index], ...inject }
        return newShares
      })
    },
    []
  )

  return (
    <Card>
      <h2>シェア</h2>
      <div>
        <label>
          <span>しきい値: </span>
          <Input
            type="number"
            width="sm"
            value={threshold}
            onChange={(e) => setThreshold(+e.target.value)}
          />
        </label>
      </div>
      <ShareContainer>
        {tmpShares.map((share, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ShareComponent key={`${threshold}-${i}`}>
            <Input
              type="text"
              width="md"
              value={share.x}
              onChange={(e) => {
                updateTmpShares(i, { x: e.target.value })
              }}
            />
            <Input
              type="text"
              width="lg"
              value={share.y}
              onChange={(e) => updateTmpShares(i, { y: e.target.value })}
            />
          </ShareComponent>
        ))}
      </ShareContainer>
    </Card>
  )
}

export default ShareTable
