import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    addons: ["@chromatic-com/storybook", {
        name: '@storybook/addon-styling-webpack',
        options: {
            rules: [
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',  // 添加PostCSS支持
                        'less-loader',  // Add this for LESS support
                    ],
                },
            ],
        },
    }, '@storybook/addon-docs'],

    framework: {
		name: "@storybook/react-vite",
		options: {},
	},

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};
export default config;
