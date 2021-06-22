import styled, { css } from 'styled-components'

// __________
//
type Size = 'sm' | 'md' | 'lg'

export const Input = styled.input<{ width: Size }>`
  padding: 2px 4px;
  border: 1px solid ${({ theme }) => theme.gray2};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgWhite};

  ${({ width }) => {
    switch (width) {
      case 'sm':
        return css`
          width: 32px;
        `
      case 'lg':
        return css`
          width: 88px;
        `
      default:
      case 'md':
        return css`
          width: 64px;
        `
    }
  }};
`
