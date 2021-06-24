module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sharing',
        permanent: true,
      },
    ]
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ssss-demo' : '',
}
