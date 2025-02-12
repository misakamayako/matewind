import type {Meta} from "@storybook/react";
import {useRef, useState} from "react";

import LazyBy from "./LazyBy.ts";
import {Button} from "../../component";
export default {
	title: "UTILS/LazyBy",
} as Meta;
const fetchData = async () => {
	// 模拟一个异步任务
	return new Promise<string>((resolve) => {
		setTimeout(() => resolve("Lazy data loaded!"), 2000);
	});
};


export const Example = () => {
	const lazyData = useRef(new LazyBy(fetchData));
	const [loading,setLoading] = useState(false);
	const [data,setData] = useState("");
	const getData = async () => {
		setLoading(true);
		const result = await lazyData.current.get();
		setData(result);
		setLoading(false);
	};

	return (
		<div style={{ padding: "20px"}}>
			<h2>LazyBy Example</h2>
			<p>
				This demonstrates how the <code>LazyBy</code> utility works by lazily fetching data only when needed.
			</p>
			<p>
				It only requests one time if no error occurred, and it will reuse data after getData success, it's very powerful when multiple places use one data source.
			</p>
			<Button loading={loading} onClick={()=>getData()}>get data</Button>
			<Button onClick={()=>setData("")}>clear data</Button>
			<p>{data}</p>
		</div>
	);
};
