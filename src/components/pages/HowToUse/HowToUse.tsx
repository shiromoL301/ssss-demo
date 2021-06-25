import { VFC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import sharingPic from './img/sharing.png'
import reconstructionPic from './img/reconstruction.png'

// __________
//
const Section = styled.section`
  max-width: 600px;
  margin-inline: auto;
  margin-bottom: 12px;
`

const ImgWrapper = styled.div`
  max-width: 400px;
  border: 1px solid ${({ theme }) => theme.gray4};
  border-radius: 5px;
  overflow: hidden;
`

// __________
//
const HowToUsePage: VFC = () => (
  <div>
    <Section>
      <h2>分散</h2>
      <ImgWrapper>
        <Image src={sharingPic} alt="sharing" />
      </ImgWrapper>
      <div>
        <p>
          ①:
          秘密値としきい値を設定して、作成ボタンを押すと多項式が生成されます。
        </p>
        <p>
          ②:
          追加ボタンを押すことで、シェアが作成されます。復元するためにはシェアはしきい値以上の数である必要があります。
        </p>
      </div>
    </Section>
    <Section>
      <h2>復元</h2>
      <ImgWrapper>
        <Image src={reconstructionPic} alt="reconstruction" />
      </ImgWrapper>
      <div>
        <p>①: シェアのしきい値とシェアを入力します。</p>
        <p>②: 入力が終わると、シェアから秘密値が出力されます。</p>
      </div>
    </Section>
  </div>
)

export default HowToUsePage
