import {useState} from "react";

import {FloatingLabelInput} from "../../component";

interface ModalInputInterface {
	setValue(value: string): void;
}

export const PrivateInput = (props: ModalInputInterface) => {
	const [value, setValue] = useState("");

	return (
		<FloatingLabelInput
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
				props.setValue(e.target.value); // 这里应传入新的 value 而不是旧的
			}}
		/>
	);
};
