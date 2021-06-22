import { VFC } from 'react'
import { useRecoilState } from 'recoil'

import { GraphView } from '@/components/common/GraphView'
import { useCoefficients } from '@/store/coefficients'

import { thresholdAtom, secretAtom } from '../atoms'
import { useShare } from '../hooks/useShare'

// __________
//
const PolynomialView: VFC = () => {
  const [threshold, setThreshold] = useRecoilState(thresholdAtom)
  const [secret, setSecret] = useRecoilState(secretAtom)
  const { coeffs, setCoeffs, f, initRandomCoeffs } = useCoefficients()
  const { shares, initShares } = useShare(threshold, f)

  return (
    <div>
      <div>y={JSON.stringify(coeffs)}</div>
      <div>
        <GraphView
          f={f}
          primaryPoints={[{ x: 0, y: secret }]}
          secondaryPoints={shares}
        />
      </div>
      <div>
        <div>
          Secret:{' '}
          <input
            type="number"
            value={secret}
            onChange={(e) => setSecret(+e.target.value)}
          />
        </div>
        <div>
          Threshold:{' '}
          <input
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(+e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            initRandomCoeffs(threshold - 1, -20, 20)
            setCoeffs((prev) => {
              const cs = [...prev]
              cs[0] = secret
              return cs
            })
            initShares()
          }}
        >
          更新
        </button>
      </div>
    </div>
  )
}

export default PolynomialView
