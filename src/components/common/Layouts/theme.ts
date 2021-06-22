import { createGlobalStyle } from 'styled-components'

import restCss from 'ress'

// ____________________
//
export const theme = {
  primary: '#282760',
  secondary: '#fdd209',
  white: '#fff',
  TranslucentWhite: '#ffffff75',
  gray: '#eee',
  gray2: '#ccc',
  gray3: '#aaa',
  gray4: '#767676',
  gray5: '#454545',
  black: '#4A4F52',
  red: '#ef0130',
  small: '700px',
  bg: '#F6F6FA',
  bgWhite: '#fff',
}

type Theme = typeof theme

export const GlobalStyle = createGlobalStyle`
  ${restCss}
  body {
    background-color: ${(p) => p.theme.gray};
    color: ${(p) => p.theme.black};
    margin: 0px;
    font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
      Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN,
      メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, sans-serif; 
  }
`

// ____________________
//
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
