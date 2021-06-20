import { VFC } from 'react'
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'

import { MainLayout } from '@/components/common/Layouts'
import { pages } from '@/components/pages'

// __________
//
export const App: VFC = () => (
  <HashRouter>
    <MainLayout>
      <Switch>
        {pages.map((page) => (
          <Route key={page.title} {...page} />
        ))}
      </Switch>
    </MainLayout>
  </HashRouter>
)
