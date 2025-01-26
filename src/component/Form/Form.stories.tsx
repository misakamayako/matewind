import type { Meta, StoryObj } from "@storybook/react";

import {Form,FormItem,FloatingLabelInput} from "..";

const meta:Meta<typeof Form> = {
	component: Form,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const WithDefaultLabel:Story = (props:Parameters<typeof Form>[0])=>{
	return (
		<Form inline={props.inline} labelPosition={props.labelPosition} width={props.width}>
			<FormItem label={"this is a label"}>
				<FloatingLabelInput/>
			</FormItem>
			<FormItem label={"this is second label"}>
				<FloatingLabelInput/>
			</FormItem>
		</Form>
	);
};
WithDefaultLabel.args={
	width:"120",
	labelPosition:"left",
};
WithDefaultLabel.argTypes = {
	width:{
		control: "text",
		description: "Can be a number or a numeric string.",
	},
	children:{
		table: {
			disable: true,
		},
	},
	labelPosition:{
		options: ["top", "left"],
		control: { type: "radio" },
	},
};

export const WithFloatingLabel:Story = (props:Parameters<typeof Form>[0])=>{
	return (
		<Form {...props} width={0}>
			<FormItem>
				<FloatingLabelInput label={"this is a label"}/>
			</FormItem>
			<FormItem>
				<FloatingLabelInput label={"this is another label"}/>
			</FormItem>
		</Form>
	);
};
WithFloatingLabel.args={
};
WithDefaultLabel.argTypes = {
	width:{
		control: "text",
		description: "Can be a number or a numeric string.",
	},
	children:{
		table: {
			disable: true,
		},
	},
};

