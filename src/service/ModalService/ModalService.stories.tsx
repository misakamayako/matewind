import ModalService from "./ModalService";

export default {
};

export const ShowModal = () => {
	const handleShowModal = () => {
		ModalService.show({
			title: "普通弹窗",
			children: <p>这是一个普通弹窗的内容。</p>,
		}).catch(() => {
			console.log("弹窗已关闭");
		});
	};

	return (
		<button
			className="px-4 py-2 bg-blue-500  rounded-sm"
			onClick={handleShowModal}
		>
        显示弹窗
		</button>
	);
};

export const ConfirmModal = () => {
	const handleConfirmModal = async () => {
		const confirmed = await ModalService.confirm("你确定要继续吗？");
		if (confirmed) {
			console.log("用户点击了确认");
		} else {
			console.log("用户取消了操作");
		}
	};

	return (
		<button
			className="px-4 py-2 bg-green-500  rounded-sm"
			onClick={handleConfirmModal}
		>
        显示确认弹窗
		</button>
	);
};

export const PromptModal = () => {
	const handlePromptModal = async () => {
		try {
			const result = await ModalService.prompt("请输入您的名字：");
			console.log("用户输入了：", result);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			console.log("用户取消了输入");
		}
	};

	return (
		<button
			className="px-4 py-2 bg-purple-500  rounded-sm"
			onClick={handlePromptModal}
		>
        显示输入弹窗
		</button>
	);
};
