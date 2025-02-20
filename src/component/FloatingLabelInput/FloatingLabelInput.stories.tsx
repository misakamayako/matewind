import type { Meta, StoryObj } from "@storybook/react";

import FloatingLabelInput from "./FloatingLabelInput";

const meta: Meta<typeof FloatingLabelInput> = {
	title: "Component/FloatingLabelInput",
	component: FloatingLabelInput,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["normal", "small"],
			if: { arg: "textArea", truthy: false },
		},
		textArea: {
			control: { type: "boolean" },
			defaultValue: false,
		},
		clearable: {
			control: { type: "boolean" },
			if: { arg: "textArea", truthy: false },
		},
	},
};

export default meta;

type Story = StoryObj<typeof FloatingLabelInput>;

// 基础输入框
export const Default: Story = {
	args: {
		placeholder: "Enter text...",
		maxLength: 50,
	},
};

// 带浮动标签
export const WithLabel: Story = {
	args: {
		label: "Username",
		placeholder: " ",
	},
};

// 带前缀图标
export const WithPrefix: Story = {
	args: {
		prefix: <span style={{ padding: "0 4px" }}>🔍</span>,
		placeholder: "Search...",
	},
	decorators: [
		(Story) => (
			<div style={{ width: "300px", margin: "20px auto" }}>
				<Story />
			</div>
		),
	],
};

// 小尺寸输入框
export const SmallSize: Story = {
	args: {
		size: "small",
		label: "Small Input",
		placeholder: " ",
	},
};

// 文本域
export const TextArea: Story = {
	args: {
		textArea: true,
		label: "Description",
		rows: 4,
		placeholder: "Enter description...",
		maxLength: 200,
	},
};

// 带最大长度限制
export const WithMaxLength: Story = {
	args: {
		label: "Tweet",
		maxLength: 140,
		placeholder: "What's happening?",
	},
};

// 完整功能展示
export const CompleteExample: Story = {
	args: {
		textArea: false,
		label: "Full Name",
		size: "normal",
		prefix: <span style={{ paddingRight: 4 }}>👤</span>,
		placeholder: " ",
		maxLength: 30,
		clearable: true,
		style: {
			width: "400px",
			backgroundColor: "#f5f5f5",
		},
	},
	decorators: [
		(Story) => (
			<div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
				<Story />
			</div>
		),
	],
};
