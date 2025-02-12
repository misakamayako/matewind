import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import {Button,Tag} from "..";

const meta: Meta<typeof Tag> = {
	title: "Component/Tag",
	component: Tag,
	tags: ["autodocs"],
	argTypes: {
		onClose: { action: "closed" },
		children: { control: "text" },
	},
};

export default meta;

type Story = StoryObj<typeof Tag>;

// 基础样式Story
export const Default: Story = {
	args: {
		children: "基础标签",
		onClose:undefined,
	},
};

// 可关闭的标签Story
export const Closable: Story = {
	args: {
		children: "可关闭标签",
		onClose: () => console.log("关闭标签"),
	},
};

// 交互式示例Story
export const InteractiveExample = () => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<>
			<p><Button onClick={()=>setIsVisible(true)}>reset</Button></p>
			<p>
				{isVisible?(
					<Tag onClose={() => setIsVisible(false)}>
						<span style={{color: "red"}}>点击关闭按钮试试</span>
					</Tag>
				)	:null}
			</p>
		</>
	);
};

InteractiveExample.storyName = "交互示例（点击关闭消失）";
