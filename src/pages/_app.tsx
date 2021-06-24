import { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import { MainLayout } from '@/components/common/Layouts'

// __________
//
const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Head>
      <title>SSSS Demo</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="/logo_512.png" />
      <link rel="icon" type="image/png" href="/ssss-demo/logo_512.png" />
    </Head>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </RecoilRoot>
)

export default MyApp
