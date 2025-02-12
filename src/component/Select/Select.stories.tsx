import { useState } from "react";

import Select from "./Select";

export default {
	component: Select,
};

const options = [
	{ id: 1, label: "Option 1" },
	{ id: 2, label: "Option 2" },
	{ id: 3, label: "Option 3" },
	{ id: 4, label: "Option 4" },
	{ id: 5, label: "Option 5" },
];

export const SingleSelect = () => {
	const [value, setValue] = useState<number>();

	return (
		<div>
			<Select
				search
				options={options}
				placeholder="Select an option"
				value={value}
				onChange={(newValue) => {
					console.count("callback");
					setValue(newValue);
				}}
			/>
			<p>value:{value}</p>
		</div>
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

// export const WithAddNew = () => {
// 	const [value, setValue] = useState<number[]>([]);
// 	const [dynamicOptions, setDynamicOptions] = useState(options);

// const handleAddNew = () => {
// 	const newOption = {
// 		id: dynamicOptions.length + 1,
// 		label: `Option ${dynamicOptions.length + 1}`,
// 	};
// 	setDynamicOptions([...dynamicOptions, newOption]);
// };
//
// 	return (
// 		<Select
// 			multiple
// 			options={dynamicOptions}
// 			placeholder="Add new options"
// 			value={value}
// 			onChange={(newValue) => setValue(newValue)}
// 		/>
// 	);
// };
