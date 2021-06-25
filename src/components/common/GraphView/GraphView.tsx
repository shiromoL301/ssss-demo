import { VFC, useMemo } from 'react'
import styled from 'styled-components'

// __________
//
export type Coordinates = {
  x: number
  y: number
}

export type GraphViewProps = {
  f: (x: number) => number
  primaryPoints?: Coordinates[]
  secondaryPoints?: Coordinates[]
}

const WIDTH = 500
const HEIGHT = 400
const XRANGE = [-4, 10]
const YRANGE = [-400, 500]

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

const Svg = styled.svg`
  background-color: ${({ theme }) => theme.bgWhite};
  max-width: ${WIDTH}px;
  max-height: ${HEIGHT}px;
  width: 90vw;
`

const StyledAxis = styled.line`
  stroke: ${({ theme }) => theme.gray3};
`

const AxisText = styled.text`
  fill: ${({ theme }) => theme.gray3};
`

const Point = styled.circle`
  fill: ${({ theme }) => theme.primary};
  opacity: 0.15;
`

const SecondaryPoint = styled.circle`
  fill: ${({ theme }) => theme.white};
  stroke: ${({ theme }) => theme.primary};
  stroke-width: 2px;
  r: 3;
  &:hover {
    cursor: pointer;
    r: 6px;
    transition: 0.2s;
  }
`

const PrimaryPoint = styled.circle`
  fill: ${({ theme }) => theme.secondary};
  stroke: ${({ theme }) => theme.primary};
  stroke-width: 1px;
  r: 4;
  &:hover {
    cursor: pointer;
    r: 7px;
    transition: 0.2s;
  }
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
  const centerPoint = scale({ x: 0, y: 0 })
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
      {centerPoint && (
        <AxisText
          transform={`translate(${centerPoint.x - 20}, ${centerPoint.y + 20})`}
        >
          O
        </AxisText>
      )}
      <AxisText
        transform={`translate(${xAxisPoints[1] && xAxisPoints[1].x - 20}, ${
          xAxisPoints[1] && xAxisPoints[1].y + 20
        })`}
      >
        x
      </AxisText>
      <AxisText
        transform={`translate(${yAxisPoints[1] && yAxisPoints[1].x - 20}, ${
          yAxisPoints[1] && yAxisPoints[1].y + 20
        })`}
      >
        y
      </AxisText>
    </>
  )
}

const GraphView: VFC<GraphViewProps> = ({
  f,
  primaryPoints,
  secondaryPoints,
}) => {
  const points = useMemo(() => {
    const tick = 100
    const num = (XRANGE[1] - XRANGE[0]) * tick
    const result = []
    for (let x = XRANGE[0]; x < num; x += 1 / tick) {
      const p = scale({ x, y: f(x) })
      if (p) {
        result.push(p)
      }
    }
    return result
  }, [f])

  return (
    <Svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
      <Axis />
      {points.map((p) => (
        <Point key={`${p.x},${p.y}`} r={1} cx={p.x} cy={p.y} />
      ))}
      {secondaryPoints?.map((point, i) => {
        const p = scale(point)
        if (!p) return null
        return (
          // eslint-disable-next-line react/no-array-index-key
          <SecondaryPoint key={`${p.x},${p.y},${i}`} r={3} cx={p.x} cy={p.y} />
        )
      })}
      {primaryPoints?.map((point, i) => {
        const p = scale(point)
        if (!p) return null
        return (
          // eslint-disable-next-line react/no-array-index-key
          <PrimaryPoint key={`${p.x},${p.y},${i}`} r={4} cx={p.x} cy={p.y} />
        )
      })}
    </Svg>
  )
}

export default GraphView
