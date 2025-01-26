import type React from "react";

import fls from "./FloatingLabelInput.module.less";

interface BaseInputProps {
	maxLength?: number
	placeholder?: string
	rows?: number
	value?: string
}

interface InputProps extends BaseInputProps {
	label?: string;
	textArea?: false;
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

interface TextAreaProps extends BaseInputProps {
	label?: string;
	textArea: true;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
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
						fls.tailmatePeer,
						fls.tailmateInputTextarea,
					].join(" ")}
					maxLength={props.maxLength}
					placeholder={props.placeholder}
					rows={props.rows}
					value={props.value}
					onChange={props.onChange}
				/>
			) : (
				<>
					<span>prefix </span>
					<input
						className={[
							fls.tailmatePeer,
							fls.tailmateInput,
						].join(" ")}
						maxLength={props.maxLength}
						placeholder={props.placeholder || "  "}
						type="text"
						value={props.value}
						onChange={props.onChange}
					/>
				</>
			)}
			{props.label ? (
				<span
					className={[
						fls.tailmateFloatLabel,
						fls.tailmateAfter,
					].join(" ")}
				>
					{props.label}
				</span>
			) : null}
		</label>
	);
}
