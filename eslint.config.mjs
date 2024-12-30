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
        Packages: 'readonly',
        Cartoon: 'readonly',
        Inject_NetworkHelper: 'readonly',
        Inject_PreferenceHelper: 'readonly',
        Inject_WebViewHelperV2: 'readonly',
        Inject_WebViewHelper: 'readonly',
        Inject_OkhttpHelper: 'readonly',
        JSSourceUtils: 'readonly',
        WebViewHelperV2: 'readonly',
        ParserException: 'readonly',
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
        makeTextDanmaku: 'readonly',
        PlayLine: 'readonly',
        Episode: 'readonly',
        Base64: 'readonly',
        HashSet: 'readonly',
        Thread: 'readonly',
        Log: 'readonly',
        HashMap: 'readonly',
      }
    }
  },
  pluginJs.configs.recommended,
];