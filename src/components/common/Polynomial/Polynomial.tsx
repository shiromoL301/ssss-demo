/* eslint-disable react/no-array-index-key */
import { VFC } from 'react'
import styled from 'styled-components'

// __________
//
export type PolynomialProps = {
  coeffs: number[]
}

const Symbol = styled.span`
  margin-inline: 3px;
`

// __________
//
const Polynomial: VFC<PolynomialProps> = ({ coeffs }) => (
  <div>
    y =
    {coeffs.map((v, i) => {
      if (v === 0) return null
      if (i === 0) return <span key={`${i}${v}`}>{v}</span>
      const symbol = v > 0 ? '+' : '-'
      if (i === 1) {
        return (
          <span key={`${i}${v}`}>
            <Symbol>{symbol}</Symbol>
            {Math.abs(v)}x
          </span>
        )
      }
      return (
        <span key={`${i}${v}`}>
          <Symbol>{symbol}</Symbol>
          {Math.abs(v)}x<sup>{i}</sup>
        </span>
      )
    })}
  </div>
)

export default Polynomial
