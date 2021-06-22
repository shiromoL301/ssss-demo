import { VFC } from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router'

import { PolynomialView } from './PolynomialView'
import { ShareTable } from './ShareTable'

// __________
//
const Container = styled.div`
  display: flex;
`

// __________
//
const ReconstructPage: VFC<RouteComponentProps> = () => (
  <Container>
    <PolynomialView />
    <ShareTable />
  </Container>
)

export default ReconstructPage
