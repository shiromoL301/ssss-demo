import { VFC } from 'react'
import { useLocation } from 'react-router'

import { PageTitle, findPagePath } from '@/components/pages'

import { LinkTab, LinkTabs } from './styles'

// __________
//
type Links = {
  title: PageTitle
  name: string
  path: string
}

const links: Links[] = [
  {
    title: 'SHARING',
    name: '分散',
    path: findPagePath('SHARING'),
  },
  {
    title: 'RECONSTRUCT',
    name: '復元',
    path: findPagePath('RECONSTRUCT'),
  },
  {
    title: 'HOW_TO_USE',
    name: '使い方',
    path: findPagePath('HOW_TO_USE'),
  },
  {
    title: 'ABOUT_APP',
    name: 'このアプリについて',
    path: findPagePath('ABOUT_APP'),
  },
]

// __________
//
const PageLinkTabs: VFC = () => {
  const { pathname } = useLocation()

  return (
    <LinkTabs>
      {links.map(({ title, path, name }) => (
        <LinkTab key={title} to={path} isActive={path === pathname}>
          {name}
        </LinkTab>
      ))}
    </LinkTabs>
  )
}

export default PageLinkTabs
