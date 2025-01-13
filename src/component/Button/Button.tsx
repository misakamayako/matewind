import ArrowPathIcon from "@heroicons/react/20/solid/ArrowPathIcon";
import type { ReactNode } from "react";

import MatewindButtonStyle from "./Button.module.less";

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
				props.loading? MatewindButtonStyle.MatewindButtonLoading:null,
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
				<ArrowPathIcon/>
			) : null}
			{props.children ? (
				<span className={MatewindButtonStyle.MatewindButtonContent}>{props.children}</span>
			) : null}
		</button>
	);
}
