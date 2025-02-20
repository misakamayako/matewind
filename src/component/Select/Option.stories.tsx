import type { Meta } from "@storybook/react";
import {useRef, useState} from "react";

import Option from "./Option";

const meta = {
	component: Option,
} satisfies Meta<typeof Option>;

export default meta;

export const Default = ()=>{
	const [selected,setSelected] = useState(false);
	const current = useRef({
		id: 1,
		label: "this is a label",
	});
	return <Option
		current={current.current}
		selected={selected}
		onClick={()=>setSelected(!selected)}
	/>;
};

