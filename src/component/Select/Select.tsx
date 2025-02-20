import {useEffect, useState, useMemo, useRef} from "react";
import type { MouseEventHandler} from "react";

import {Option,Tag} from "..";
import ss from "./Select.module.less";
import type {KeyableType, SelectProps, SelectValue} from "./SelectTypes";
import {useDebounce} from "../../utils";
import FloatingLabelInput from "../FloatingLabelInput";


export default function Select<
				ID extends KeyableType, Multiple extends boolean = false
>(props: SelectProps<Multiple,ID>){
	const { value, options, multiple=false } = props;
	const [searchText,setSearchText] = useState<string>();
	const internalDict = useRef(new Map<ID, string>());
	useEffect(() => {
		const current = internalDict.current;
		options.forEach((it) => {
			current.set(it.id, it.label);
		});
	}, [options]);
	const [showList,setShowList] = useState(false);
	const displayText = useMemo(() => {
		if (multiple) {
			const selectedIds = (Array.isArray(value) ? value : []) as ID[];
			const result: string[] = [];
			selectedIds.forEach(id => {
				result.push(internalDict.current.has(id) ? String(internalDict.current.get(id)) : id.toString());
			});
			return result;
		} else {
			const singleValue = value as (ID | undefined);
			if ((singleValue||singleValue===0) && internalDict.current.has(singleValue)) {
				return String(internalDict.current.get(singleValue));
			}
			return singleValue ? singleValue.toString() : undefined;
		}
	}, [value, internalDict, multiple]);
	const handleSelect = (id: ID) => {
		let nextValue: SelectValue<ID, Multiple>;
		if (props.multiple) {
			const currentValues = (Array.isArray(value) ? [...value] : []) as ID[];
			const index = currentValues.indexOf(id);
			if (index > -1) {
				currentValues.splice(index, 1);
			} else {
				currentValues.push(id);
			}
			nextValue = currentValues as SelectValue<ID, Multiple>;
			if(searchText&&searchText.trim()){
				inputRef.current?.focus();
			}
		} else {
			nextValue = (value === id ? null : id) as SelectValue<ID, Multiple>;
			if(nextValue!==null) setShowList(false);
			setSearchText("");
		}
		props.onChange(nextValue);
	};
	const selectRef = useRef<HTMLDivElement>(null);
	const selectRoot = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLLabelElement>(null);
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
				setShowList(false);
				setSearchText("");
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);
	const filteredOptions = useMemo(() => {
		if (!props.remote&&searchText) {
			return options.filter(option =>
				option.label.toLowerCase().includes(searchText.toLowerCase()),
			);
		}
		return options;
	}, [searchText, options, props.remote]);

	const debouncedSearch = useDebounce((text: string) => {
		if (props.remote) {
			props.remote(text);
		}
	}, 300);

	const handleSearch = (text: string) => {
		setSearchText(text);
		debouncedSearch(text);
	};
	const removeTag = (index:number)=>{
		const current = [...(value as ID[])];
		current.splice(index,1);
		props.onChange?.(current as SelectValue<ID, Multiple>);
	};
	const handleClickRoot: MouseEventHandler<HTMLDivElement> = (e)=>{
		if(e.target === selectRoot.current){
			setShowList(!showList);
		} else if(inputRef.current&&e.target&&inputRef.current.contains(e.target as HTMLElement)){
			setShowList(true);
		}
	};
	return (
		<div className={ss.tailmateSelectRoot} ref={selectRef}>
			<div className={[ss.tailmateSelectDisplay,props.multiple?ss.withPadding:null].join(" ")} ref={selectRoot} onClick={handleClickRoot}>
				{
					props.multiple===true ?
						(displayText as string[]).map((key,index)=>{
							return <Tag key={key} onClose={()=>removeTag(index)}>{key}</Tag>;
						})
						: searchText?
							null
							:<span className={[ss.displayText,(showList||!displayText)?ss.open:null].join(" ")}>{displayText??props.placeholder}</span>
				}
				{
					props.search ?
						<FloatingLabelInput
							clearable
							className={ss.tailmateInputInSelect}
							label={props.label}
							ref={inputRef}
							size={"small"}
							value={searchText}
							onChange={e=>handleSearch(e.target.value)}
						/>
						:null
				}

			</div>
			{
				showList?
					<div className={ss.tailmateSelectListBoxRoot}>
						{props.remote&&props.loading
							?<span className={ss.noData}>loading...</span>
							:filteredOptions.length>0?
								filteredOptions.map(it=>{
									return <Option
										current={it}
										key={it.id}
										selected={Array.isArray(value)?value.some(it2=>it2===it.id):value===it.id}
										onClick={handleSelect}
									/>;
								})
								:<span className={ss.noData}>no data</span>}
					</div>:null
			}
		</div>
	);
};
