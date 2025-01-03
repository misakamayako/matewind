import { useState } from "react";

import LazyBy from "./LazyBy.ts";

export default {

};

const fetchData = async () => {
	// 模拟一个异步任务
	return new Promise<string>((resolve) => {
		setTimeout(() => resolve("Lazy data loaded!"), 2000);
	});
};

export const Default = () => {
	const [lazyData] = useState(() => new LazyBy(fetchData));
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const handleLoad = async () => {
		setLoading(true);
		setError(null);
		try {
			const result = await lazyData.get();
			setData(result);
		} catch (err) {
			console.log(err);
			setError("Failed to load data.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
			<h2>LazyBy Example</h2>
			<p>
          This demonstrates how the <code>LazyBy</code> utility works by lazily
          fetching data only when needed.
			</p>
			<button
				style={{
					padding: "10px 20px",
					backgroundColor: "#007bff",
					color: "#fff",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
					marginBottom: "10px",
				}}
				onClick={handleLoad}
			>
				{loading ? "Loading..." : "Load Data"}
			</button>
			{data && <p style={{ color: "green" }}>Data: {data}</p>}
			{error && <p style={{ color: "red" }}>Error: {error}</p>}
		</div>
	);
};
