import { VFC } from 'react'

import { useCoefficients } from '@/store/coefficients'

import { useShare } from '../hooks/useShare'

// __________
//
const ShareTable: VFC = () => {
  const { coeffs, f, deg } = useCoefficients()
  const { shares, canAppend, appendDistinctShare } = useShare(deg + 1, f)

  return (
    <div>
      <h2>Shares</h2>
      <div>
        {shares.map((share) => (
          <div key={`${JSON.stringify(coeffs)}${share.x}`}>
            {JSON.stringify(share)}
          </div>
        ))}
        {canAppend && (
          <button type="button" onClick={appendDistinctShare}>
            add
          </button>
        )}
      </div>
    </div>
  )
}

export default ShareTable
