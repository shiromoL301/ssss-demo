import { VFC, useMemo } from 'react'
import styled from 'styled-components'

// __________
//
export type Coefficients = number[]

export type GraphViewProps = {
  coefficients: Coefficients
}

export type Coordinates = {
  x: number
  y: number
}

const WIDTH = 500
const HEIGHT = 400
const XRANGE = [-50, 450]
const YRANGE = [-50, 450]

function scale(p: Coordinates): Coordinates | null {
  if (XRANGE[0] > p.x || p.x > XRANGE[1]) return null
  if (YRANGE[0] > p.y || p.y > YRANGE[1]) return null

  const x = (p.x - XRANGE[0]) * (WIDTH / (XRANGE[1] - XRANGE[0]))
  const y = (YRANGE[1] - p.y) * (HEIGHT / (YRANGE[1] - YRANGE[0]))
  return {
    x,
    y,
  }
}

function createMapping(coeffs: Coefficients) {
  return (x: number) =>
    coeffs.reduce((prev, cur, idx) => prev + cur * x ** idx, 0)
}

const Svg = styled.svg`
  background-color: ${({ theme }) => theme.bgWhite};
`

const StyledAxis = styled.line`
  stroke: ${({ theme }) => theme.gray3};
`

const Point = styled.circle`
  fill: ${({ theme }) => theme.primary};
`

// __________
//
const Axis: VFC = () => {
  const xAxisPoints = [
    scale({ x: XRANGE[0], y: 0 }),
    scale({ x: XRANGE[1], y: 0 }),
  ]
  const yAxisPoints = [
    scale({ x: 0, y: YRANGE[0] }),
    scale({ x: 0, y: YRANGE[1] }),
  ]
  return (
    <>
      <StyledAxis
        x1={xAxisPoints[0]?.x}
        y1={xAxisPoints[0]?.y}
        x2={xAxisPoints[1]?.x}
        y2={xAxisPoints[1]?.y}
      />
      <StyledAxis
        x1={yAxisPoints[0]?.x}
        y1={yAxisPoints[0]?.y}
        x2={yAxisPoints[1]?.x}
        y2={yAxisPoints[1]?.y}
      />
    </>
  )
}

const GraphView: VFC<GraphViewProps> = ({ coefficients }) => {
  const f = useMemo(() => createMapping(coefficients), [coefficients])

  const points = useMemo(() => {
    const tick = 10
    const num = Math.max(WIDTH, HEIGHT) * tick
    const result = []
    for (let x = XRANGE[0]; x < num; x += 1 / tick) {
      const p = scale({ x, y: f(x) })
      if (p) {
        result.push(p)
      }
    }
    return result
  }, [f, coefficients])

  return (
    <Svg width={WIDTH} height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
      <Axis />
      {points.map((p) => (
        <Point key={`${p.x},${p.y}`} r={1} cx={p.x} cy={p.y} />
      ))}
    </Svg>
  )
}

export default GraphView
