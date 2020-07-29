interface userProps {
	name?: string;
	age?: number;
}

type CallBack = () => void;

export class User {
	events: { [key: string]: CallBack[] } = {};

	constructor(public data: userProps) {}

	get(propsName: string): userProps {
		return this.data[propsName];
	}

	setUser(update: userProps): void {
		Object.assign(this.data, update);
	}

	on(eventName: string, callback: CallBack): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}
}
