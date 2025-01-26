import type {ReactNode} from "react";
import { useContext} from "react";

import FormItemStyle from "./FormItem.module.less";
import {InlineProducer, LabelPositionContext, WidthProducer} from "./FormProducer.ts";

interface Props {
    label?: ReactNode;
    children: ReactNode;
}

function FormItem(props: Props) {
	const width = useContext(WidthProducer);
	const inline = useContext(InlineProducer);
	const labelPosition = useContext(LabelPositionContext);
	return (
		<div className={[FormItemStyle.FormItem, inline ? FormItemStyle.inlineForm : null].join(" ")}>
			<label
				className={[FormItemStyle.FormItemLabel, labelPosition === "top" ? FormItemStyle.TopLabel : null].join(" ")}
				style={{width: width + "px"}}>
				{props.label}
			</label>
			<div className={FormItemStyle.FormItemContent}>
				{props.children}
			</div>
		</div>
	);
}

export default FormItem;
