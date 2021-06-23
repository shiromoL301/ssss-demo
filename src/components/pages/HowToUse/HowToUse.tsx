import { VFC } from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router'

// __________
//
const Section = styled.section`
  max-width: 600px;
  margin-inline: auto;
  margin-bottom: 12px;
`

// __________
//
const HowToUsePage: VFC<RouteComponentProps> = () => (
  <div>
    <Section>
      <h2>分散</h2>
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
      <div>
        <p>①: シェアのしきい値とシェアを入力します。</p>
        <p>②: 入力が終わると、シェアから秘密値が出力されます。</p>
      </div>
    </Section>
  </div>
)

export default HowToUsePage
