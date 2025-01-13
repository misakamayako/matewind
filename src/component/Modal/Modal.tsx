import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import type { ReactNode } from "react";
import ms from "./Modal.module.less"

import Button from "../Button/Button.tsx";
// eslint-disable-next-line react-refresh/only-export-components
export enum ModalAction {
	confirm,
	cancel,
	close,
}

export interface ModalProps {
	open: boolean;
	onClose: (action: ModalAction) => void;
	children: ReactNode;
	title?: ReactNode;
	showCancel?: boolean;
	cancelContent?: ReactNode;
	showConfirm?: boolean;
	confirmContent?: ReactNode;
}

export default function Modal(props: ModalProps) {
	if (props.open) {
		return (
			<div className={ms.tailmateModalContainer}>
				<Dialog
					className={ms.tailmateModalDialog}
					open={true}
					onClose={() => props.onClose(ModalAction.close)}
				>
					<div className={ms.tailmateModalMain}>
						<DialogPanel className={ms.tailmateModalPanel}>
							<DialogTitle className={ms.tailmateModalTitle}>
								{props.title}
							</DialogTitle>
							{props.children}
							<hr />
							<div style={{display: "flex",justifyContent: "flex-end"}}>
								{props.showCancel ? (
									<Button
										type={"cancel"}
										onClick={() =>
											props.onClose(ModalAction.cancel)
										}
									>
										{props.cancelContent??"cancel"}
									</Button>
								) : null}
								{props.showConfirm === false ? null : (
									<Button
										onClick={() =>
											props.onClose(ModalAction.confirm)
										}
									>
										{props.confirmContent??"confirm"}
									</Button>
								)}
							</div>
						</DialogPanel>
					</div>
				</Dialog>
			</div>
		);
	} else {
		return null;
	}
}
