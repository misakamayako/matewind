import type {InputHTMLAttributes, TextareaHTMLAttributes} from "react";

import fls from "./FloatingLabelInput.module.less";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	textArea?: false;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	textArea: true;
}

type Props = TextAreaProps | InputProps;
export default function FloatingLabelInput(props: Props) {
	return (
		<label
			className={fls.tailmateInputLabel}
		>
			{props.textArea ? (
				<textarea
					className={[
						"peer",
						fls.tailmateInputTextarea,
					].join(" ")}
					maxLength={props.maxLength}
					placeholder={props.placeholder}
					rows={props.rows}
					value={props.value}
					onChange={props.onChange}
				/>
			) : (
				<input
					className={[
						"peer",
						fls.tailmateInput,
					].join(" ")}
					maxLength={props.maxLength}
					placeholder={props.placeholder}
					type="text"
					value={props.value}
					onChange={props.onChange}
				/>
			)}
			{props.label ? (
				<span
					className={[
						fls.tailmateFloatLabel,
						props.textArea
							? "peer-placeholder-shown:top-4"
							: "peer-placeholder-shown:top-1/2",
						"peer-placeholder-shown:text-sm",
						"peer-focus:top-0",
						"peer-focus:text-xs",
					].join(" ")}
				>
					{props.label}
				</span>
			) : null}
		</label>
	);
}
