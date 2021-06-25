import styled from 'styled-components'

// __________
//
const ErrorContainer = styled.div`
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ErrorCode = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 5rem;
`

const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.gray3};
  font-size: 3rem;
  font-weight: bold;
  margin-left: 1rem;
`

// __________
//
export default function Custom404() {
  return (
    <div>
      <ErrorContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorMsg>NotFound</ErrorMsg>
      </ErrorContainer>
      <div>
        <p>
          指定した URL が見つかりませんでした。削除されたか、URL
          が間違えている可能性があります。
        </p>
      </div>
    </div>
  )
}
