export type PageTitle = 'ABOUT_APP' | 'HOW_TO_USE' | 'RECONSTRUCT' | 'SHARING'

type Page = {
  title: PageTitle
  path: string
}

// __________
//
export const pages: Page[] = [
  {
    title: 'ABOUT_APP',
    path: '/about-app',
  },
  {
    title: 'HOW_TO_USE',
    path: '/how-to-use',
  },
  {
    title: 'RECONSTRUCT',
    path: '/reconstruct',
  },
  {
    title: 'SHARING',
    path: '/sharing',
  },
]

export function findPagePath(pageTitle: PageTitle): string {
  const page = pages.find((p) => p.title === pageTitle)

  if (!page) {
    throw new Error('given an unexpected page title.')
  }
  return page.path
}
