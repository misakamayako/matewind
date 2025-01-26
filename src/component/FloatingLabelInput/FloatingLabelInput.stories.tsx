import type { Meta ,StoryFn} from "@storybook/react";

import FloatingLabelInput from "./FloatingLabelInput";

export default {
	title: "Component/FloatingLabelInput",
	component: FloatingLabelInput,
	argTypes: {
		label: { control: "text", description: "Label for the input field" },
		textArea: { control: "boolean", description: "Render as textarea if true" },
		placeholder: { control: "text", description: "Placeholder text" },
		value: { control: "text", description: "Value of the input/textarea" },
		maxLength: { control: "number", description: "Maximum length of the input/textarea" },
		rows: { control: "number", description: "Number of rows for textarea (ignored for input)" },
		onChange: { action: "changed", description: "Change event handler" },
	},
} as Meta;

const Template:StoryFn = (args) => <FloatingLabelInput {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
	label: "Default Input",
	placeholder: "Enter text here...",
	textArea: false,
};

export const TextArea = Template.bind({});
TextArea.args = {
	label: "Text Area",
	placeholder: "Type something...",
	textArea: true,
	rows: 4,
};

export const InputWithMaxLength = Template.bind({});
InputWithMaxLength.args = {
	label: "Input with Max Length",
	placeholder: "Max 10 characters",
	maxLength: 10,
	textArea: false,
};
