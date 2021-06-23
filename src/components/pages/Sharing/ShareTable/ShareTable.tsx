import { VFC } from 'react'
import styled from 'styled-components'

import { useCoefficients } from '@/store/coefficients'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'

import { useShare } from '../hooks/useShare'

// __________
//
const ShareComponent = styled.div`
  margin: 4px 0px;
`

const ShareContainer = styled.div`
  margin-top: 12px;
`

// __________
//
const ShareTable: VFC = () => {
  const { coeffs, f, deg } = useCoefficients()
  const { shares, canAppend, appendDistinctShare } = useShare(deg + 1, f)

  return (
    <Card>
      <h2>シェア</h2>
      <ShareContainer>
        {shares.map((share) => (
          <ShareComponent key={`${JSON.stringify(coeffs)}${share.x}`}>
            ({share.x}, {share.y})
          </ShareComponent>
        ))}
        {canAppend && (
          <Button type="button" onClick={appendDistinctShare}>
            追加
          </Button>
        )}
      </ShareContainer>
    </Card>
  )
}

export default ShareTable
