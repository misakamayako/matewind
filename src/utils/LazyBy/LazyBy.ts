interface SchedulerPostTaskOptions {
    signal?: AbortSignal;
    priority?: "low" | "medium" | "high"; // TaskPriority
    delay?: number;
}

type SchedulerPostTaskCallback = () => void;

interface Scheduler {
    postTask<T>(
        callback: SchedulerPostTaskCallback,
        options?: SchedulerPostTaskOptions,
    ): Promise<T>;

    yield(): Promise<undefined>;
}
declare const scheduler: Scheduler;
class LazyBy<T> {
	private readonly task: () => Promise<T>;
	private result: T | undefined;
	private promise: Promise<T> | undefined;
	private initialized = false;

	constructor(task: () => Promise<T>) {
		this.task = task;
	}

	async get(): Promise<T> {
		if (!this.initialized) {
			if (this.promise === undefined) {
				this.promise = (typeof scheduler?.postTask === "function"
					? (scheduler.postTask<T>).bind(scheduler)
					: async (fn: () => Promise<T>) => fn())(async () => {
					try {
						this.result = await this.task();
						this.initialized = true;
						return this.result;
					} catch (error) {
						this.promise = undefined; // 任务失败时清理状态
						throw error;
					}
				});
			}
			return this.promise satisfies Promise<T>;
		}
		if (this.result === undefined) {
			throw new Error("Lazy initialization failed. The task did not complete successfully.");
		}
		return this.result;
	}
}

export default LazyBy;
