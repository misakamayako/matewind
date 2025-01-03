import type { Meta, StoryObj } from "@storybook/react";

import Form from "./Form.tsx";
import FormItem from "./FormItem.tsx";
import Input from "../Input/FloatingLabelInput.tsx";

const meta:Meta<typeof Form> = {
	component: Form,
	render: ({width, labelPosition, inline}) => (
		<Form inline={inline} labelPosition={labelPosition} width={width}>
			<FormItem label={"this is a label"}>
				<Input/>
			</FormItem>
			<FormItem label={"this is second label"}>
				<Input/>
			</FormItem>
		</Form>
	),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name:"default form",
	args:{
		width:"120",
		labelPosition:"left",
	},
	argTypes:{
		width:{
			control: "text",
			description: "Can be a number or a numeric string.",
		},
	},
};

export const InlineForm:Story={
	name:"inlineForm",
	args:{
		inline:true,
		width:"120",
		labelPosition:"top",
	},
	argTypes:{
		width:{
			control: "text",
			description: "Can be a number or a numeric string.",
		},
	},
};
