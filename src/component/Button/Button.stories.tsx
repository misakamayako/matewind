import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./Button.tsx";

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
			table:{
				disable:true,
			},
		},
		className:{
			table: {disable: true},
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

export const GhostButton: Story = {
	args: {
		children:  <span>click me</span>,
		onClick: fn(()=>{console.log(1);}),

		disabled: false,
		loading: false,
		type: "cancel",
	},

	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},

		className: {
			table: {
				disable: true,
			},
		},

		loading: {
			table: {
				type: {
					summary: "React.ReactNode",
				},

				description: "React.ReactNode",
			},

			type: "boolean",
			defaultValue: false,
		},
	},
};
