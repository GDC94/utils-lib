module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "ignorePatterns": [".eslintrc.cjs", "dist", "vite.config.ts", "commitlint.config.cjs", ".prettierrc"],
    "plugins": ["simple-import-sort"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
       "eol-last": ["error", "never"]

    }
}
