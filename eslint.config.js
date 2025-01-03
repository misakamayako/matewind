import js from "@eslint/js";
import ipt from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";


export default tseslint
	.config(
		{ignores: ["dist", "main", "types", "storybook-static"]},
		{
			extends: [js.configs.recommended, ...tseslint.configs.recommended],
			files: ["src/**/*.{ts,tsx}", "src/**/*.stories.{ts,tsx}", "eslint.config.js", "vite.config.ts"],
			languageOptions: {
				ecmaVersion: 2020,
				globals: globals.browser,
			},
			plugins: {
				"react-hooks": reactHooks,
				"react-refresh": reactRefresh,
				"import": ipt,
				"react": react,
			},
			rules: {
				...reactHooks.configs.recommended.rules,
				"react-refresh/only-export-components": [
					"warn",
					{allowConstantExport: true},
				],
				"indent": ["error", "tab", {"SwitchCase": 1}],
				"no-tabs": "off",
				"quotes": ["error", "double"],
				"semi": ["error", "always"],
				"comma-dangle": ["error", "always-multiline"],
				"eol-last": ["error", "always"],
				"linebreak-style": ["error", "windows"],
				"import/order": ["error", {
					"groups": [
						["builtin", "external"],
						["internal"],
						["parent", "sibling", "index"],
					],
					"alphabetize": {
						"order": "asc",  // 按字母顺序升序排序
						"caseInsensitive": true,  // 忽略大小写
					},
					"newlines-between": "always",  // 每个分组之间强制换行
				}],
				"import/first": ["error"],  // 强制所有 import 语句放在文件顶部
				"import/no-duplicates": "error",  // 禁止重复的 import 语句
				"react/jsx-sort-props": ["error", {
					"callbacksLast": true,  // 将回调函数放在最后
					"shorthandFirst": true, // 将简写的 props 放在前面
					"ignoreCase": true,     // 忽略大小写
					"noSortAlphabetically": false,  // 按字母顺序排序
					"multiline": "ignore",  // 不强制多行 props 排序
					"locale": "auto",        // 自动使用本地语言环境排序
				}],
				"@typescript-eslint/consistent-type-imports": ["error", {
					"prefer": "type-imports",  // 强制使用 import type .. from .. 语法
				}],
			},
		},
	);
