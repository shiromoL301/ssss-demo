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
}
