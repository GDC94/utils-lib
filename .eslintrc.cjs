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
       "eol-last": ["error", "never"],
       "@typescript-eslint/no-explicit-any": [0, { "ignoreRestArgs": true }],
       "semi": ["off", "always"],
       "no-new-wrappers": "off",
       "@typescript-eslint/no-unused-expressions": "off",
       "@typescript-eslint/no-confusing-void-expression": "off",
       "@typescript-eslint/strict-boolean-expressions": "off"

    }
}
