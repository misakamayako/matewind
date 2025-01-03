import type { Meta, StoryObj } from "@storybook/react";
import {fn} from "@storybook/test";

import Pager from "./Pager";

const meta = {
	component: Pager,
} satisfies Meta<typeof Pager>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args:{
		total:500,
		pageSize:10,
		current:5,
		onChange:fn(),
	},
	argTypes:{
	},
};
