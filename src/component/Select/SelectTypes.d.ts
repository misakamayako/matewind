export type Item<T> = {
	label:string,
	id:T
} &Record<unknown, unknown>

export type SelectValue<T, M extends boolean> = M extends true ? Array<T> : (T|undefined);

export interface SelectProps<T extends Item<V>, V extends NonNullable<unknown>, M extends boolean = false> {
	value?: SelectValue<V, M>;
	options: T[];
	onChange: (value: SelectValue<V, M>) => void;
	multiple?: M;
	addNew?: () => void;
	placeholder?: string;
	clearable?: boolean;
	label?:string;
}
