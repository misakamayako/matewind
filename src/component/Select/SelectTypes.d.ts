export type KeyableType = string | number
export type Item<ID extends KeyableType> = {
	label:string,
	id:ID
} &Record<unknown, unknown>

export type SelectValue<ID, Multiple extends boolean> = Multiple extends true ? Array<ID> : (ID|undefined);

export interface SelectProps<ID extends KeyableType, Multiple extends boolean = false> {
	value?: SelectValue<ID, Multiple>;
	options: Item<ID>[];
	onChange: (value: SelectValue<ID, Multiple>) => void;
	multiple?: Multiple;
	placeholder?: string;
	clearable?: boolean;
	label?:string;
	search?:true;
	remote?:(text:string)=>Promise
	loading?:boolean
	handleAddNew?: (text:string) => void;
}
// export interface SelectFC<T extends Item<V>, V extends KeyableType, M extends boolean = false>(props: SelectProps<T, V, M>)

