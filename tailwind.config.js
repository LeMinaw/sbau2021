const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        enabled: true,
        content: [
            '**/templates/**/*.html',
            '**/content/**/*.html',
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['gotham', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: false, // or 'media' or 'class'
    variants: {
        extend: {},
    },
    plugins: [],
}
