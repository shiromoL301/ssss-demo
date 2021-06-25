const basePath = process.env.NODE_ENV === 'production' ? '/ssss-demo' : ''

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: `${basePath}/sharing`,
        permanent: true,
      },
    ]
  },
  basePath,
  publicRuntimeConfig: {
    basePath,
  },
}
