class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g)
  }
}

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['static/css'],
    }),
    require('tailwindcss')('static/js/tailwind.js'),
    require('autoprefixer')({
      browsers: ['>1%']
    }),
  ]
}
