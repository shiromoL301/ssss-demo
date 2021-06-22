import { VFC } from 'react'
import { RouteComponentProps } from 'react-router'

import { PolynomialView } from './PolynomialView'

// __________
//
const SharingPage: VFC<RouteComponentProps> = () => (
  <div>
    <PolynomialView />
  </div>
)

export default SharingPage
