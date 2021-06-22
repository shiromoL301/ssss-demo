import styled from 'styled-components'

// __________
//
export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  box-shadow: 0 0 2px 1px ${({ theme }) => theme.gray2};
  color: ${({ theme }) => theme.white} !important;
  padding: 2px 6px;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    box-shadow: none;
  }
`
