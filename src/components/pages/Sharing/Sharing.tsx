import { VFC } from 'react'
import styled from 'styled-components'

import { PolynomialView } from './PolynomialView'
import { ShareTable } from './ShareTable'

// __________
//
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    & > div:not(:first-child) {
      margin-top: 1rem;
    }
  }
`

// __________
//
const SharingPage: VFC = () => (
  <Container>
    <div>
      <PolynomialView />
    </div>
    <div>
      <ShareTable />
    </div>
  </Container>
)

export default SharingPage
