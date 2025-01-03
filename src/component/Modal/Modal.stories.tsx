import type { Meta, StoryObj } from "@storybook/react";
import {fn} from "@storybook/test";

import Modal from "./Modal";

const meta = {
	component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args:{
		open:true,
		children:<div>this is content</div>,
		onClose:fn(),
		showCancel:true,
		showConfirm:true,
		title:"this is title",
	},
};
