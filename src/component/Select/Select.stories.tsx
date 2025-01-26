import { useState } from "react";

import Select from "./Select";

export default {
	component: Select,
};

const options = [
	{ id: 1, text: "Option 1" },
	{ id: 2, text: "Option 2" },
	{ id: 3, text: "Option 3" },
	{ id: 4, text: "Option 4" },
];

export const SingleSelect = () => {
	const [value, setValue] = useState<number>();

	return (
		<Select
			options={options}
			placeholder="Select an option"
			value={value}
			onChange={(newValue) => setValue(newValue)}
		/>
	);
};

export const MultiSelect = () => {
	const [value, setValue] = useState<number[]>([1, 2]);

	return (
		<Select
			multiple
			options={options}
			placeholder="Select multiple options"
			value={value}
			onChange={(newValue) => setValue(newValue)}
		/>
	);
};

export const WithAddNew = () => {
	const [value, setValue] = useState<number[]>([]);
	const [dynamicOptions, setDynamicOptions] = useState(options);

	const handleAddNew = () => {
		const newOption = {
			id: dynamicOptions.length + 1,
			text: `Option ${dynamicOptions.length + 1}`,
		};
		setDynamicOptions([...dynamicOptions, newOption]);
	};

	return (
		<Select
			multiple
			addNew={handleAddNew}
			options={dynamicOptions}
			placeholder="Add new options"
			value={value}
			onChange={(newValue) => setValue(newValue)}
		/>
	);
};
