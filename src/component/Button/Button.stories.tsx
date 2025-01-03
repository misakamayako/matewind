import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./Button";

const meta = {
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <span>click me</span>,
		onClick: fn(()=>{console.log(1);}),
	},
	argTypes: {
		children: {
			table: {
				type: {
					summary: "React.ReactNode",
				},
				description:"React.ReactNode",
			},
		},
		loading: {
			table: {
				type: {
					summary: "React.ReactNode",
				},
				description:"React.ReactNode",
			},
			type:"boolean",
			defaultValue:false,
		},
	},
};
