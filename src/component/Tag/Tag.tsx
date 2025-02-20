import {
	XMarkIcon,
} from "@heroicons/react/16/solid";
import type {ReactNode} from "react";

import TagStyle from "./Tag.module.pcss";
interface Props{
	onClose?:VoidFunction
	children?: ReactNode;
}
export default function Tag(props:Props){
	return (
		<div className={TagStyle.tailmateTag}>
			{props.children}
			{props.onClose?<XMarkIcon className={TagStyle.closeSvg} onClick={props.onClose}/>:null}
		</div>
	);
}
