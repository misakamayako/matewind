export type KeyableType = string | number;

export type Item<ID extends KeyableType> = {
	label: string;
	id: ID;
	[key: string]: unknown;
};

export type SelectValue<ID extends KeyableType=string, Multiple extends boolean> =
	Multiple extends true ? ID[] : (ID | undefined);

export interface SelectProps<Multiple extends boolean = false, ID extends KeyableType = string> {
	value?: SelectValue<ID, Multiple>;
	options: Item<ID>[];
	onChange: (value: SelectValue<ID, Multiple>) => void;
	multiple?: Multiple;
	placeholder?: string;
	clearable?: boolean;
	label?: string;
	search?: boolean;
	remote?: (text: string) => unknown;
	loading?: boolean;
	handleAddNew?: (text: string) => void;
}
