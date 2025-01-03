import React from "react";

import AlertService from "./AlertService";

export default {

};

export const InfoAlert = () => {
	React.useEffect(() => {
		const remover = AlertService.info("This is an info message!");
		return () => remover(); // 清理消息
	}, []);

	return <div>Info Alert is displayed using AlertService.</div>;
};

export const ErrorAlert = () => {
	React.useEffect(() => {
		const remover = AlertService.error("This is an error message!");
		return () => remover(); // 清理消息
	}, []);

	return <div>Error Alert is displayed using AlertService.</div>;
};

export const MultipleAlerts = () => {
	React.useEffect(() => {
		const removeInfo = AlertService.info("Info message!");
		const removeError = AlertService.error("Error message!");
		return () => {
			removeInfo();
			removeError();
		};
	}, []);

	return <div>Multiple alerts are displayed using AlertService.</div>;
};

export const LongDurationAlert = () => {
	React.useEffect(() => {
		AlertService.setTime(10_000);
		const remover = AlertService.info("This alert lasts for 10 seconds!");
		return () => remover(); // 清理消息
	}, []);

	return <div>Long duration alert is displayed using a custom AlertService.</div>;
};
