import { VFC } from 'react'
import styled from 'styled-components'

import Logo from '../../../../../assets/logo.svg'

// __________
//
const LogoWrapper = styled.div`
  margin-right: 12px;
  img {
    height: 64px;
    width: 64px;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Foot = styled.div`
  font-size: small;
  color: ${({ theme }) => theme.gray4};
`

// __________
//
const AppInfo: VFC = () => (
  <Container>
    <LogoWrapper>
      <img alt="app" src={Logo} />
    </LogoWrapper>
    <div>
      <h2>SSSS Demo</h2>
      <Foot>ver 1.0.0 © 2021 城本研究室</Foot>
    </div>
  </Container>
)

export default AppInfo
