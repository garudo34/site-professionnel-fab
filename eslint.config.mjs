import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierPlugin from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Désactive les règles ESLint qui entrent en conflit avec Prettier
  configPrettier,

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])
