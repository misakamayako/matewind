import {CheckIcon} from "@heroicons/react/20/solid";
import type { ReactNode } from "react";

import OC from "./Option.module.pcss";
import type {Item} from "./SelectTypes";
interface OptionProps<T>{
	current:Item<T>
	selected:boolean
	children?:(selected:boolean)=>ReactNode
	onClick?:(element:T)=>void
}
export default function Options<T>(props:OptionProps<T>){
	return (
		<div className={[OC.tailmateOption].join(" ")} onClick={()=>{props.onClick?props.onClick(props.current.id):null;}}>
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
