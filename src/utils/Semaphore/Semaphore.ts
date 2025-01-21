export default class Semaphore {
	private permits: number;
	private queue: Array<() => void>;

	constructor(maxPermits: number) {
		this.permits = maxPermits;
		this.queue = [];
	}

	async acquire(): Promise<void> {
		if (this.permits > 0) {
			this.permits--;
			return;
		}

		await new Promise<void>((resolve) => this.queue.push(resolve));
	}

	release(): void {
		if (this.queue.length > 0) {
			const resolve = this.queue.shift();
			resolve?.();
		} else {
			this.permits++;
		}
	}
}
