module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "node": true
      },
    "rules": {
        "react/jsx-uses-react": 1,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};