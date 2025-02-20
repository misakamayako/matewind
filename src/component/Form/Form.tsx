import type {ReactNode} from "react";

import FormStyle from "./FormItem.module.less";
import {WidthProducer, InlineProducer, LabelPositionContext} from "./FormProducer";

interface Props {
	width?: number | `${number}`;
	children?: ReactNode;
	inline?: boolean,
	labelPosition?: "left" | "top",
}

function Form(props: Props) {
	const innerWidth = props.width ?? 60;
	const inline = props.inline ?? false;
	const labelPosition = props.labelPosition ?? "left";
	return (
		<form className={[FormStyle.Form, inline ? FormStyle.inlineForm : null].join(" ")}>
			<WidthProducer.Provider value={innerWidth}>
				<InlineProducer.Provider value={inline}>
					<LabelPositionContext.Provider value={labelPosition}>
						{props.children}
					</LabelPositionContext.Provider>
				</InlineProducer.Provider>
			</WidthProducer.Provider>
		</form>
	);
}

export default Form;
