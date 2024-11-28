import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], 
    languageOptions: {
      sourceType: "commonjs"
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        java: 'readonly',
        Cartoon: 'readonly',
        Inject_NetworkHelper: 'readonly',
        Inject_PreferenceHelper: 'readonly',
        Inject_WebViewHelperV2: 'readonly',
        Inject_OkhttpHelper: 'readonly',
        ArrayList: 'readonly',
        JSLogUtils: 'readonly',
        SourcePreference: 'readonly',
        MainTab: 'readonly',
        SubTab: 'readonly',
        Pair: 'readonly',
        PlayerInfo: 'readonly',
        Jsoup: 'readonly',
        makeCartoonCover: 'readonly',
        makeCartoon: 'readonly',
        PlayLine: 'readonly',
        Episode: 'readonly',
      }
    }
  },
  pluginJs.configs.recommended,
];