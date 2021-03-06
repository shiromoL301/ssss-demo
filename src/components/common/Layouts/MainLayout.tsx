import { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { PageLinkTabs } from '@/components/common/Layouts/PageLinkTabs'

import { theme, GlobalStyle } from './theme'

// __________
//
const Main = styled.main`
  padding: 24px;
  max-width: 800px;
  margin-inline: auto;

  @media screen and (max-width: 800px) {
    padding: 24px 12px;
  }
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
