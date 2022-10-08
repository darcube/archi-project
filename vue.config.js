module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/archi-project/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/styles/variables.scss";`
        }
      }
    },
    pages: {
      index: {
        entry: 'src/main.ts',
        title: 'ES Architekt',
      },
    }
}