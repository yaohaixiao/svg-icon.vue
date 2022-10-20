/**
 * .stylelintrc.js - stylelint 配置
 * =============================================================
 * @see https://github.com/postcss/postcss-bem-linter
 * @see https://github.com/simonsmith/stylelint-selector-bem-pattern
 *
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
const componentName = '\\.\\w+(?:[-_]{1,2}\\w+)*'
const allowedTags = ['h[1-6]', 'ul', 'li', 'a', 'tr', 'th', 'td'].join('|')
const allowedThirdPartyClasses = ['ui-', 'sa-', 'fa-']
  .map((p) => `\\.${p}[w_-]+`)
  .join('|')
const optionalAttributeSelector = '[[+.>~]?'

module.exports = {
  // extends: 'stylelint-config-standard',
  customSyntax: 'postcss-less',
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      implicitComponents: ['src/**/*.less', 'documentation/**/*.less'],
      implicitUtilities: 'documentation/theme/utils/*.less',
      componentSelectors: {
        // (?:\s?\.\w+[-_]{1,2}\w+)*
        initial: `^${componentName}(?:\\s?\\.\\w+[-_]{1,2}\\w+)*$`,
        combined: `^(${allowedTags}|${allowedThirdPartyClasses}|${optionalAttributeSelector}|${componentName})*$`
      },
      utilitySelectors: `^\\.util-\\w+(?:[-_]{1,2}\\w+)*$`,
      ignoreSelectors: ['/deep/', '>>>', '\\+', '\\>', '\\~', '^\\.icon-'],
      ignoreCustomProperties: []
    }
  }
}
