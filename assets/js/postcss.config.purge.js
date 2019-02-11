class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g)
  }
}

const themeDir = __dirname + '/../../';

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['./css'],
    }),
    require('tailwindcss')(themeDir + './assets/js/tailwind.js'),
    require('@fullhuman/postcss-purgecss')({
      content: [themeDir + './layouts/**/*.html'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html'],
        }
      ],
      fontface: true
    })
    require('autoprefixer')({
      browsers: ['>1%']
    }),
  ]
}
