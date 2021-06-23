import { VFC } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import { GraphView } from '@/components/common/GraphView'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { Polynomial } from '@/components/common/Polynomial'
import { useCoefficients } from '@/store/coefficients'

import { thresholdAtom, secretAtom } from '../atoms'
import { useShare } from '../hooks/useShare'

// __________
//
const MainContainer = styled.div`
  position: relative;
`

const PolyContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`

const Foot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Label = styled.label`
  margin-right: 12px;
`

// __________
//
const PolynomialView: VFC = () => {
  const [threshold, setThreshold] = useRecoilState(thresholdAtom)
  const [secret, setSecret] = useRecoilState(secretAtom)
  const { coeffs, setCoeffs, f, initRandomCoeffs } = useCoefficients()
  const { shares, initShares } = useShare(threshold, f)

  return (
    <div>
      <MainContainer>
        <PolyContainer>
          <Polynomial coeffs={coeffs} />
        </PolyContainer>
        <GraphView
          f={f}
          primaryPoints={[{ x: 0, y: secret }]}
          secondaryPoints={shares}
        />
      </MainContainer>
      <Foot>
        <div>
          <Label>
            <span>秘密値: </span>
            <Input
              type="number"
              width="md"
              value={secret}
              onChange={(e) => setSecret(+e.target.value)}
            />
          </Label>
          <Label>
            <span>しきい値: </span>
            <Input
              type="number"
              width="sm"
              value={threshold}
              min={0}
              max={5}
              onChange={(e) => setThreshold(+e.target.value)}
            />
          </Label>
        </div>
        <Button
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
          作成
        </Button>
      </Foot>
    </div>
  )
}

export default PolynomialView
