import type {Meta} from "@storybook/react";

import SemaphoreComponent from "./componen.tsx";

export default {
	title: "UTILS/Semaphore",
	// component: SemaphoreComponent,
} as Meta;

const Template= () => <SemaphoreComponent />;

export const Example = Template.bind({});
