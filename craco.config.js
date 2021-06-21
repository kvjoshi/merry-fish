module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                require('cssnano')({
                    preset: 'default',
                }),
            ],
        },
    },
}
/*"start": "craco start",
  "build": "craco build",
  "test": "craco test",

  to add to package json*/
