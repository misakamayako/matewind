import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import type { ReactNode } from "react";

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
			<div className="fixed inset-0 bg-black opacity-50 z-50 flex content-center justify-center">
				<Dialog
					className="relative z-50"
					open={true}
					onClose={() => props.onClose(ModalAction.close)}
				>
					<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
						<DialogPanel className="space-y-4 border bg-white p-6 w-[480px]">
							<DialogTitle className="font-bold">
								{props.title}
							</DialogTitle>
							{props.children}
							<hr />
							<div className="flex justify-end">
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
