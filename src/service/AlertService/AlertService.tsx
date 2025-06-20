import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";

import alertServiceStyle from "./alertservice.module.pcss";

enum MessageType {
	success,
	warning,
	info,
	error,
}

interface Message {
	content: string;
	type: MessageType;
	id: symbol;
}

class AlertService {
	readonly #element?: HTMLDivElement;
	readonly #root?: Root;
	#messageList: Array<Message> = [];
	#timeLimit?: number;
	setTime(duration:number){
		this.#timeLimit=duration;
	}
	#id = 0;
	private get id() {
		return this.#id++;
	}

	constructor(duration: number = 5) {
		if (typeof window === "undefined") {
			return;
		}

		this.#element = document.createElement("div");
		this.#timeLimit = duration * 1000;
		document.body.append(this.#element);
		this.#root = createRoot(this.#element);
	}

	error(message: string) {
		return this.info(message);
	}

	info(message: string) {
		const id = Symbol(this.id.toString());
		const instance: Message = {
			content: message,
			type: MessageType.info,
			id,
		};
		this.#messageList.push(instance);
		this.#render();
		const remover = () => {
			this.#remove(id);
		};

		setTimeout(() => {
			remover();
		}, this.#timeLimit);
		return remover;
	}

	#remove(id?: symbol): void {
		if (id === undefined) {
			this.#messageList = [];
		} else {
			const index = this.#messageList.findIndex((it) => it.id === id);
			if (index > -1) {
				this.#messageList.splice(index, 1);
			}
		}
		this.#render();
	}

	element(props: { message: Message[] }) {
		return (
			<div className={alertServiceStyle.content}>
				{props.message.map((t) => (
					<div key={t.id.toString()}>
						<div className={alertServiceStyle.message}>
							{t.content}
						</div>
					</div>
				))}
			</div>
		);
	}

	#render() {
		const Element = this.element;
		this.#root?.render(<Element message={this.#messageList} />);
	}
}

export default new AlertService();
