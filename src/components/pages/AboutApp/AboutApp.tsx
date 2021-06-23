import { VFC } from 'react'
import styled from 'styled-components'

import { AppInfo } from './AppInfo'

// __________
//
const CommentContainer = styled.div`
  max-width: 500px;
  margin: 12px auto;
`

// __________
//
const AboutAppPage: VFC = () => (
  <div>
    <AppInfo />
    <CommentContainer>
      <p>
        このアプリは Shamir&apos;s Secret Sharing Scheme
        をアプリ用に改変したものになります。
      </p>
      <p>実際の手法とは異なるため、ご了承ください。</p>
    </CommentContainer>
  </div>
)

export default AboutAppPage
