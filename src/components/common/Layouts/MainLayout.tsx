import { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { PageLinkTabs } from '@/components/common/Layouts/PageLinkTabs'

import { theme, GlobalStyle } from './theme'

// __________
//
const Main = styled.main`
  padding: 1rem;
`

const MainLayout: FC = ({ children }) => (
  <div>
    <PageLinkTabs />
    <Main>{children}</Main>
  </div>
)

export const Container: FC = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>{children}</MainLayout>
    </ThemeProvider>
  </>
)

export default Container
