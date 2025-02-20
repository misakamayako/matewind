import {useEffect, useRef} from "react";

export default function useDebounce<Args extends unknown[]>(
	fn: (...args: Args) => void,
	delay: number,
): (...args: Args) => void {
	const timeoutRef = useRef<number>(-1);

	useEffect(() => {
		return () => {
			window.clearTimeout(timeoutRef.current);
		};
	}, []);

	return (...args: Args) => {
		window.clearTimeout(timeoutRef.current);
		timeoutRef.current = window.setTimeout(() => fn(...args), delay);
	};
};
