import type { Meta, StoryObj } from "@storybook/react";

import FloatingLabelInput from "./FloatingLabelInput";

const meta = {
	component: FloatingLabelInput,
} satisfies Meta<typeof FloatingLabelInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args:{
		label:"this is a label",
	},
};
export const TextArea:Story = {
	args:{
		textArea:true,
		label:"this is a label",
		maxLength:undefined,
	},
	argTypes:{
		textArea: {
			control: false,
			table:{
				defaultValue: {summary:"false"},
			},
		},
		maxLength:{
			control:{
				type:"number",
				min:0,
			},
			description:"max text you can input, default is uncontrolled",
			defaultValue:{
				summary:300,
			},
		},
	},
};
