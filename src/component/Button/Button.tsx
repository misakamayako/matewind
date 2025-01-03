import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";
import type { ReactNode } from "react";

import MatewindButtonStyle from "./Button.module.css";

interface Props {
	children?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	loading?: boolean;
	className?: string | undefined;
	type?:"cancel"|"default"
}

export default function Button(props: Props) {
	return (
		<button
			className={[
				MatewindButtonStyle.MatewindButton,
				props.type==="cancel"? MatewindButtonStyle.MatewindCancelButton:null,
				props.className,
			].join(" ")}
			disabled={props.disabled}
			type={"button"}
			onClick={() => {
				if (!props.disabled && props.onClick) {
					props.onClick.call(null);
				}
			}}
		>
			{props.loading === true ? (
				<ArrowPathIcon
					className={["animate-spin", "cursor-pointer", "w-4"].join(
						" ",
					)}
				/>
			) : null}
			{props.children ? (
				<span className={"flex-shrink-0"}>{props.children}</span>
			) : null}
		</button>
	);
}
