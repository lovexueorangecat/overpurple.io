module.exports = {
  env: {
    "node": true,
    "browser": true,
    "es6": true,
  },
  parser: `@typescript-eslint/parser`, // 将解析器从`babel-eslint`替换成`@typescript-eslint/parser`,用以解析 TS 代码
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": "latest",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    }
  },
  extends: [
    `google`,
    `eslint:recommended`,
    `plugin:@typescript-eslint/recommended`, // 使用 @typescript-eslint/eslint-plugin 推荐配置
    `plugin:react/recommended`,
    `prettier/@typescript-eslint`, // 禁用 @typescript-eslint/eslint-plugin 中与 prettier 冲突的规则
    `plugin:prettier/recommended`,
  ],
  plugins: [
    `import`,
    `@typescript-eslint`, // 处理 TS 语法规则
    `react`,
    `filenames`,
  ],
  "globals": {
    "graphql": false,
  },
  rules: {
    // import
    "import/order": [
      "error",
      {
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@/**",
            "group": "external",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"]
      }
    ],
    "import/first": "error",
    "import/no-mutable-exports": "error",

     // react
     "react/prop-types": "off",
  }
}