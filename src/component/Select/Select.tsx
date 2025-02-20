import {useEffect, useState, useMemo, useRef} from "react";

import ss from "./Select.module.less";
import type {KeyableType, SelectProps, SelectValue} from "./SelectTypes";
import FloatingLabelInput from "../FloatingLabelInput";
import Option from "./Option.tsx";
import {useDebounce} from "../../utils";


export default function Select<
				ID extends KeyableType, Multiple extends boolean=false
>(props: SelectProps<ID,Multiple>){
	const { value, options, multiple=false } = props;
	const [searchText,setSearchText] = useState("");
	const [interSelected,setInterSelected] = useState(new Set<ID>());
	const intermeDict = useMemo(() => {
		const hashMap = new Map<ID, string>();
		options.forEach((it) => {
			hashMap.set(it.id, it.label);
		});
		return hashMap;
	}, [options]);
	useEffect(() => {
		if (value && Array.isArray(value)) {
			setInterSelected(new Set(value));
		} else if (value) {
			setInterSelected(new Set([value as ID]));
		} else {
			setInterSelected(new Set());
		}
	}, [value]);
	const displayText = useMemo(()=>{
		if(multiple){
			const result:Array<string> = [];
			interSelected.forEach(id=>{
				if(intermeDict.has(id)){
					result.push(String(intermeDict.get(id)));
				} else {
					result.push(id.toString());
				}
			});
			return result.join(",");
		} else {
			if(interSelected.size!==0){
				let result:string = "";
				interSelected.forEach(id=>{
					if(intermeDict.has(id)){
						result=String(intermeDict.get(id));
					} else {
						result=id.toString();
					}
				});
				return result;
			} else {
				return null;
			}
		}
	},[interSelected, intermeDict, multiple]);
	const [showList,setShowList] = useState(false);
	const handleSelect = (id:ID)=>{
		const newSet = new Set(interSelected);
		if(newSet.has(id)){
			newSet.delete(id);
		} else if(props.multiple){
			newSet.add(id);
		} else {
			newSet.clear();
			newSet.add(id);
			setShowList(false);
			setSearchText("");
		}
		setInterSelected(newSet);
		 if(props.multiple){
			props.onChange(Array.from(newSet) as SelectValue<ID, Multiple>);
		} else if(newSet.size===0){
			 props.onChange(undefined as SelectValue<ID, Multiple>);
		 } else{
			props.onChange(id as SelectValue<ID, Multiple>);
		}
	};
	const selectRef = useRef<HTMLDivElement>(null);
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
		if (!props.remote) {
			// 本地搜索过滤逻辑
			return options.filter(option =>
				option.label.toLowerCase().includes(searchText.toLowerCase()),
			);
		}
		// 远程搜索时直接返回所有选项（由父组件控制）
		return options;
	}, [searchText, options, props.remote]);

	// 添加防抖的远程搜索
	const debouncedSearch = useDebounce((text: string) => {
		if (props.remote) {
			props.remote(text);
		}
	}, 300);

	const handleSearch = (text: string) => {
		setSearchText(text);
		debouncedSearch(text);
	};
	return (
		<div className={ss.tailmateSelectRoot} ref={selectRef}>
			<div className={ss.tailmateSelectDisplay} onClick={()=>setShowList(true)}>
				{
					props.multiple ?
						null
						: searchText?
							null
							:<span className={[ss.displayText,(showList||!displayText)?ss.open:null].join(" ")}>{displayText??props.placeholder}</span>
				}
				{
					props.search ?
						<FloatingLabelInput
							clearable
							label={props.label}
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
										selected={interSelected.has(it.id)}
										onClick={handleSelect}
									/>;
								})
								:<span className={ss.noData}>no data</span>}
					</div>:null
			}
		</div>
	);
};
