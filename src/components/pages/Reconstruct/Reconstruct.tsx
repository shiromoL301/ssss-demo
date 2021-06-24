import { VFC } from 'react'
import styled from 'styled-components'

import { PolynomialView } from './PolynomialView'
import { ShareTable } from './ShareTable'

// __________
//
const Container = styled.div`
  display: flex;
`

// __________
//
const ReconstructPage: VFC = () => (
  <Container>
    <PolynomialView />
    <ShareTable />
  </Container>
)

export default ReconstructPage
