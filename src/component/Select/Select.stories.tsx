import type {StoryFn, Meta } from "@storybook/react";
import React, {useCallback, useState} from "react";

import {Select} from ".."; // Adjust the import path as needed
import type { SelectProps } from "./SelectTypes";

export default {
	title: "Component/Select",
	tags:["autodoc"],
	component: Select,
	argTypes: {
		onChange: { action: "changed" },
	},
} as Meta;

const Template: StoryFn<SelectProps<boolean, string>> = (args) => {
	const [value, setValue] = useState<string | string[] | null>(args.multiple ? [] : null);

	
	return (
		<Select
			{...args}
			// @ts-expect-error:as template
			value={value}
			onChange={(newValue) => {
				// @ts-expect-error:as template
				setValue(newValue);
				// @ts-expect-error:as template
				args.onChange(newValue);
			}}
		/>
	);
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
	multiple: false,
	options: [
		{ id: "1", label: "Option 1" },
		{ id: "2", label: "Option 2" },
		{ id: "3", label: "Option 3" },
	],
	placeholder: "Select an option",
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
	multiple: true,
	options: [
		{ id: "1", label: "Option 1" },
		{ id: "2", label: "Option 2" },
		{ id: "3", label: "Option 3" },
	],
	placeholder: "Select options",
};

export const SearchableSingleSelect = Template.bind({});
SearchableSingleSelect.args = {
	multiple: false,
	search: true,
	options: [
		{ id: "1", label: "Option 1" },
		{ id: "2", label: "Option 2" },
		{ id: "3", label: "Option 3" },
	],
	placeholder: "Search and select an option",
};

export const SearchableMultipleSelect = Template.bind({});
SearchableMultipleSelect.args = {
	multiple: true,
	search: true,
	options: [
		{ id: "1", label: "Option 1" },
		{ id: "2", label: "Option 2" },
		{ id: "3", label: "Option 3" },
	],
	placeholder: "Search and select options",
};

export const RemoteSearchableSingleSelect = ()=>{
	const [loading,setLoading] = useState(false);
	const [options ,setOption]= useState([
 		{ id: "1", label: "Option 1" },
 		{ id: "2", label: "Option 2" },
 		{ id: "3", label: "Option 3" },
 	]);
	const [value,setValue] = useState<string>();
	const handleSearch = useCallback((text:string)=>{
		setLoading(true);
		setTimeout(()=>{
			setLoading(false);
			setOption([{id:`new${text}`,label:`new option:${text}`}]);
		},1500);
	},[]);
	return (
		<Select
			search
			loading={loading}
			options={options}
			remote={handleSearch}
			value={value}
			onChange={it=>setValue(it)}
		/>
	);
};
export const RemoteSearchableMultipleSelect =()=>{
	const [loading,setLoading] = useState(false);
	const [options ,setOption]= useState([
		{ id: "1", label: "Option 1" },
		{ id: "2", label: "Option 2" },
		{ id: "3", label: "Option 3" },
	]);
	const [value,setValue] = useState<string[]>([]);
	const handleSearch = useCallback((text:string)=>{
		setLoading(true);
		setTimeout(()=>{
			setLoading(false);
			setOption([{id:`new${text}`,label:`new option:${text}`}]);
		},1500);
	},[]);
	return (
		<Select
			multiple
			search
			loading={loading}
			options={options}
			remote={handleSearch}
			value={value}
			onChange={it=>setValue(it)}
		/>
	);
};
