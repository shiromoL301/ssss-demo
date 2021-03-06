import { VFC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { PageTitle, findPagePath } from '@/components/pages'

import { LinkTab, LinkTabs, LinkTabsContainer } from './styles'

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
  const { pathname } = useRouter()

  return (
    <LinkTabsContainer>
      <LinkTabs>
        {links.map(({ title, path, name }) => (
          <Link key={title} href={path}>
            <LinkTab isActive={path === pathname}>{name}</LinkTab>
          </Link>
        ))}
      </LinkTabs>
    </LinkTabsContainer>
  )
}

export default PageLinkTabs
