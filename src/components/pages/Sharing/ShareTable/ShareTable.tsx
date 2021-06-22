import { VFC } from 'react'

import { useCoefficients } from '@/store/coefficients'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'

import { useShare } from '../hooks/useShare'

// __________
//
const ShareTable: VFC = () => {
  const { coeffs, f, deg } = useCoefficients()
  const { shares, canAppend, appendDistinctShare } = useShare(deg + 1, f)

  return (
    <Card>
      <h2>シェア</h2>
      <div>
        {shares.map((share) => (
          <div key={`${JSON.stringify(coeffs)}${share.x}`}>
            {JSON.stringify(share)}
          </div>
        ))}
        {canAppend && (
          <Button type="button" onClick={appendDistinctShare}>
            追加
          </Button>
        )}
      </div>
    </Card>
  )
}

export default ShareTable
