import { createGlobalStyle } from 'styled-components'

import restCss from 'ress'

// ____________________
//
export const theme = {
  primary: '#936217',
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
  board: '#F7C579',
  boardBoarder: '#97794B',
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
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends Theme {}
}
