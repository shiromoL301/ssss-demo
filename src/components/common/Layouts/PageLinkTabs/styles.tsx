import styled from 'styled-components'
import { Link } from 'react-router-dom'

// __________
//
export const LinkTab = styled(Link)<{ isActive?: boolean }>`
  padding: 6px 12px;
  border: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.primary : theme.gray2)};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.primary : theme.bg};
  border-radius: 5px 5px 0px 0px;
  color: ${({ isActive, theme }) => (isActive ? theme.white : theme.black)};
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  text-decoration: none;
`

export const LinkTabs = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.gray2};
`
