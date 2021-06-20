import { VFC } from 'react'
import { RouteComponentProps } from 'react-router'

import { AboutAppPage } from './AboutApp'
import { HowToUsePage } from './HowToUse'
import { ReconstructPage } from './Reconstruct'
import { SharingPage } from './Sharing'

// __________
//
export type PageTitle = 'ABOUT_APP' | 'HOW_TO_USE' | 'RECONSTRUCT' | 'SHARING'

type Page = {
  component: VFC<RouteComponentProps>
  title: PageTitle
  path: string
  exact?: boolean
}

// __________
//
export const pages: Page[] = [
  {
    title: 'ABOUT_APP',
    component: AboutAppPage,
    path: '/about-app',
    exact: true,
  },
  {
    title: 'HOW_TO_USE',
    component: HowToUsePage,
    path: '/how-to-use',
    exact: true,
  },
  {
    title: 'RECONSTRUCT',
    component: ReconstructPage,
    path: '/reconstruct',
    exact: true,
  },
  {
    title: 'SHARING',
    component: SharingPage,
    path: '/',
    exact: true,
  },
]

export function findPagePath(pageTitle: PageTitle): string {
  const page = pages.find((p) => p.title === pageTitle)

  if (!page) {
    throw new Error('given an unexpected page title.')
  }
  return page.path
}
