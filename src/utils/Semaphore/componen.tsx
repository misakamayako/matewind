import React, { useState } from "react";

import Semaphore from "./Semaphore";
import {Button} from "../../component"; // 引入 Semaphore 类

const semaphore = new Semaphore(3); // 限制最多 3 个并发请求

const SemaphoreComponent: React.FC = () => {
	const [queueLength, setQueueLength] = useState(0); // 当前排队请求数
	const [processingCount, setProcessingCount] = useState(0); // 当前正在处理的请求数
	const [totalCount,setTotalCount] = useState(0);//总计任务数量
	const acquire = async () => {
		setTotalCount(prev => prev + 1);
		setQueueLength(prev => prev + 1);
		await semaphore.acquire();
		setQueueLength(prev => prev - 1);
		setProcessingCount(prev => prev + 1);
	};
	const release = ()=>{
		if(totalCount>0){
			semaphore.release();
			setProcessingCount(prev=>prev-1);
			setTotalCount(prev=>prev-1);
		}
	};
	return (
		<div>
			<h1>Semaphore Demo</h1>
			<p>当前正在处理的请求数量: {processingCount}</p>
			<p>等待队列长度: {queueLength}</p>
			<Button onClick={() => acquire()}>
							获取信号量
			</Button>
			<Button type={"cancel"} onClick={() => release()}>
							释放信号量
			</Button>
		</div>
	);
};

export default SemaphoreComponent;
