export default class Semaphore {
	private permits: number;
	private readonly maxPermits: number;
	private queue: Array<() => void>;

	constructor(maxPermits: number) {
		this.permits = maxPermits;
		this.maxPermits = maxPermits;
		this.queue = [];
	}

	async acquire(): Promise<()=>void> {
		if (this.permits > 0) {
			this.permits--;
			return this.release.bind(this);
		}

		return await new Promise<()=>void>((resolve) => {
			this.queue.push(()=>{
				resolve(this.release.bind(this));
			});
		});
	}

	release(): void {
		if (this.queue.length > 0) {
			const next = this.queue.shift();
			next?.();
		} else if(this.permits<this.maxPermits) {
			this.permits++;
		}
	}
}
