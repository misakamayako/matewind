import type {MouseEvent} from "react";
import { useState,useMemo} from "react";


import ss from "./Select.module.less";
import type {Item, SelectProps, SelectValue} from "./SelectTypes";
import FloatingLabelInput from "../FloatingLabelInput";


export default function Select<
				T extends Item<V>,
				V extends NonNullable<unknown>,
				M extends boolean = false>
(props: SelectProps<T, V, M>) {
	const { value, options, onChange, multiple=false, addNew, placeholder, clearable=false } = props;
	const translator = useMemo(() => {
		const hashMap = new Map<V, string>();
		options.forEach((it) => {
			hashMap.set(it.id, it.label);
		});
		return hashMap;
	}, [options]);
	const displayText = useMemo(() => {
		if (multiple) {
			if (Array.isArray(value) && value.length > 0) {
				const result: string[] = [];
				value.forEach((it) => {
					result.push(translator.get(it)!);
				});
				return result.join();
			} else {
				return undefined;
			}
		} else {
			return options.find((it) => it.id === value)?.label;
		}
	}, [multiple, value, translator, options]);
	const handleIfAdd = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		addNew!();
	};
	const filterNotNull = (newValue: SelectValue<V, M>) => {
		if (!onChange) return;

		if (multiple) {
			// 如果是多选模式，过滤掉 null 值
			const filteredValue = (Array.isArray(newValue) ? newValue : []).filter(
				(it): it is NonNullable<V> => it !== null,
			);
			onChange(filteredValue as SelectValue<V, M>);
		} else {
			// 如果是单选模式，直接调用 onChange
			onChange(newValue ?? undefined);
		}
	};
	const [showList,setShowList] = useState(false);
	return (
		<div className={ss.tailmateSelectRoot}>
			<div className={ss.tailmateSelectDisplay} onClick={()=>setShowList(true)}>
				<FloatingLabelInput label={props.label} placeholder={props.placeholder} />
			</div>
			{
				showList?<div/>:null
			}
		</div>
	);
}
