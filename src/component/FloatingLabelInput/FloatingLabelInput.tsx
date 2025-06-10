import  React from "react";

import fls from "./FloatingLabelInput.module.pcss";

interface BaseInputProps {
	maxLength?: number
	placeholder?: string
	value?: string
	style?: React.CSSProperties
	className?: string
	ref?: React.RefObject<HTMLLabelElement|null>
}

type Size = "normal" | "small"

interface InputProps extends BaseInputProps {
	textArea?: false,
	label?: string,
	onChange?: React.ChangeEventHandler<HTMLInputElement>,
	prefix?: React.ReactNode,
	clearable?: boolean,
	size?: Size,
}

interface TextAreaProps extends BaseInputProps {
	textArea: true;
	label?: string;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
	rows?: number;
	size: undefined;
}

type Props = TextAreaProps | InputProps;
export default function FloatingLabelInput(props: Props) {
	return (
		<label
			className={[fls.tailmateInputLabel, props.size === "small" ? fls.tailmateInputSmall : null, props.className].join(" ")}
			ref={props.ref}
			style={props.style}
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
					{props.prefix ?
						<span className={[fls.tailmatePrefix, props.label ? null : fls.alwaysShow].join(" ")}>{props.prefix}</span> : null}
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
