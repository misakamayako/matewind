import {CheckIcon} from "@heroicons/react/20/solid";
import type { ReactNode } from "react";

import OC from "./Option.module.pcss";
import type {Item, KeyableType} from "./SelectTypes";
interface OptionProps<Key extends KeyableType>{
	current:Item<Key>
	selected:boolean
	children?:(selected:boolean)=>ReactNode
	onClick?:(element:Key)=>void
}
export default function Option<Key extends KeyableType>(props:OptionProps<Key>){
	return (
		<div className={[OC.tailmateOption].join(" ")} onClick={()=>{props.onClick?.(props.current.id);}}>
			<div className={OC.tailmateOptionMain}>{props.children?props.children(props.selected):props.current.label}</div>
			{props.selected ? (
				<CheckIcon
					aria-hidden="true"
					className="h-5 w-5"
				/>
			) : null}
		</div>
	);
}
