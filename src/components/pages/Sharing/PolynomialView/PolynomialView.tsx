import { VFC } from 'react'
import { useRecoilState } from 'recoil'

import { GraphView } from '@/components/common/GraphView'
import { useCoefficients } from '@/store/coefficients'

import { thresholdAtom, secretAtom } from '../atoms'

// __________
//
const PolynomialView: VFC = () => {
  const [threshold, setThreshold] = useRecoilState(thresholdAtom)
  const [secret, setSecret] = useRecoilState(secretAtom)
  const { coeffs, setCoeffs, f, initRandomCoeffs } = useCoefficients()

  return (
    <div>
      <div>y={JSON.stringify(coeffs)}</div>
      <div>
        <GraphView f={f} />
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
          }}
        >
          更新
        </button>
      </div>
    </div>
  )
}

export default PolynomialView
