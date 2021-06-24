import { VFC } from 'react'
import styled from 'styled-components'

// __________
//
const LogoWrapper = styled.div`
  margin-right: 12px;
  svg {
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
const Logo: VFC = () => (
  <svg
    width="512"
    height="512"
    viewBox="0 0 160 160"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" y="5" width="150" height="150" rx="10" fill="#282760" />
    <path
      d="M 20 80 C 40 10, 60 10, 80 80 S 120 150, 140 80"
      stroke="white"
      strokeWidth="10"
      fill="transparent"
    />
    <circle
      r="10"
      cx="130"
      cy="110"
      stroke="white"
      strokeWidth="3"
      fill="#282760"
    />
    <circle
      r="10"
      cx="80"
      cy="80"
      stroke="white"
      strokeWidth="3"
      fill="#282760"
    />
    <circle r="15" cx="30" cy="55" fill="#fdd209" />
  </svg>
)

const AppInfo: VFC = () => (
  <Container>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <div>
      <h2>SSSS Demo</h2>
      <Foot>ver 1.0.0 © 2021 城本研究室</Foot>
    </div>
  </Container>
)

export default AppInfo
