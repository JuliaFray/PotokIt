// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

const sortGroups = {
  groups: [
    [
      'builtin',
      'internal',
      'external',
      'injective',
      'shared',
      'parent',
      'sibling',
      'index',
      'object',
    ],
    ['root', 'unknown'],
    'types',
    'type',
    'internal-type',
    ['parent-type', 'sibling-type', 'index-type'],
  ] as string[] | { newlinesBetween: 'always' }[],

  customGroups: {
    value: {
      shared: '^@shared/',
      injective: '^@injectivelabs/',
      types: ['^@/types', '^@/types/*'],
      root: [
        '^@/app/',
        '^@/store/',
        '^@/utils/',
        '^@/plugins/',
        '^@/assets/',
        '^@/components/',
        '^@/layouts/',
        '^@/pages/',
        '^@/public/',
        '^@/server/',
        '^@/stores/',
      ],
    },
  },
};

const orderParams = {
  order: 'asc',
  type: 'line-length',
} as const;

export default withNuxt({
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'no-unused-vars': 'off',
    'vue/html-self-closing': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
  },
});
